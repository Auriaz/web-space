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
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SpecificationRepository")
 * @ApiResource(
 *     collectionOperations={"get", "post"},
 *     itemOperations={
 *          "get",
 *          "put", 
 *          "delete",
 *          "patch"            
 *     },
 *     normalizationContext={"groups"={"specification:read"}},
 *     denormalizationContext={"groups"={"specification:write"}},
 *     attributes={
 *          "pagination_items_per_page"=10,
 *     }
 * )
 * @ApiFilter(SearchFilter::class, properties={"title": "partial"})
 * @ORM\HasLifecycleCallbacks()
 */
class Specification
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
     * @Groups({"specification:read", "specification:write"})
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"specification:read", "specification:write"})
     * @Assert\NotBlank()
     */
    private $subtitle;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"specification:read", "specification:write"})
     * @Assert\NotBlank()
     */
    private $href = "/";

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Package", inversedBy="specifications")
     */
    private $packages;

    public function __construct()
    {
        $this->packages = new ArrayCollection();
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

    public function getSubtitle(): ?string
    {
        return $this->subtitle;
    }

    public function setSubtitle(?string $subtitle): self
    {
        $this->subtitle = $subtitle;

        return $this;
    }

    public function getHref(): ?string
    {
        return $this->href;
    }

    public function setHref(string $href): self
    {
        $this->href = $href;

        return $this;
    }

    /**
     * @return Collection|Package[]
     */
    public function getPackages(): Collection
    {
        return $this->packages;
    }

    public function addPackage(Package $package): self
    {
        if (!$this->packages->contains($package)) {
            $this->packages[] = $package;
        }

        return $this;
    }

    public function removePackage(Package $package): self
    {
        if ($this->packages->contains($package)) {
            $this->packages->removeElement($package);
        }

        return $this;
    }
}
