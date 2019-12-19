<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\SerializedName;
use Symfony\Component\Validator\Constraints as Assert;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\BooleanFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PackageRepository")
 * @ApiResource(
 *     collectionOperations={"get", "post"},
 *     itemOperations={
 *          "get",
 *          "put", 
 *          "delete",
 *          "patch"            
 *     },
 *     normalizationContext={"groups"={"package:read"}},
 *     denormalizationContext={"groups"={"package:write"}},
 *     attributes={
 *          "pagination_items_per_page"=10,
 *     }
 * )
 * @ApiFilter(BooleanFilter::class, properties={"isPublished"})
 * @ApiFilter(SearchFilter::class, properties={"title": "partial"})
 * @ORM\HasLifecycleCallbacks()
 */
class Package
{
    use TimeStamps;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"package:read", "package:write"})
     * @Assert\NotBlank()
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"package:read", "package:write"})
     */
    private $price;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"package:read", "package:write"})
     */
    private $description;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"package:write"})
     */
    private $isPublished = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="packages")
     * @Groups({"package:read", "package:write"})
     * @ORM\JoinColumn(nullable=false)
     * Assert\Valid()
     */
    private $owner;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Specification", mappedBy="packages")
     * @Groups({"package:read", "package:write"})
     * @Assert\Valid()
     */
    private $specifications;

    public function __construct()
    {
        $this->specifications = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(?string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

        /**
     * The description of the cheese as raw text.
     *
     * @Groups({"package:write", "user:write"})
     * @SerializedName("description")
     */
    public function setTextDescription(string $description): self
    {
        $this->description = nl2br($description);

        return $this;
    }

    public function getIsPublished(): ?bool
    {
        return $this->isPublished;
    }

    public function setIsPublished(bool $isPublished): self
    {
        $this->isPublished = $isPublished;

        return $this;
    }

    public function getOwner(): ?User
    {
        return $this->owner;
    }

    public function setOwner(?User $owner): self
    {
        $this->owner = $owner;

        return $this;
    }

    /**
     * @return Collection|Specification[]
     */
    public function getSpecifications(): Collection
    {
        return $this->specifications;
    }

    public function addSpecification(Specification $specification): self
    {
        if (!$this->specifications->contains($specification)) {
            $this->specifications[] = $specification;
            $specification->addPackage($this);
        }

        return $this;
    }

    public function removeSpecification(Specification $specification): self
    {
        if ($this->specifications->contains($specification)) {
            $this->specifications->removeElement($specification);
            $specification->removePackage($this);
        }

        return $this;
    }
}
