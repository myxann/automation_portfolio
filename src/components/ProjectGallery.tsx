import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ProjectImage } from '../data/projects';

type Props = {
  images: ProjectImage[];
  projectTitle: string;
};

export default function ProjectGallery({ images, projectTitle }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % images.length,
        );
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === null ? null : (current - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, images.length]);

  if (!images.length) return null;

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length,
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length,
    );
  };

  return (
    <>
      <div className="project-gallery" aria-label={`${projectTitle} screenshots`}>
        {images.map((image, index) => (
          <button
            className="project-gallery__item"
            key={`${image.src}-${index}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            {image.caption && <span>{image.caption}</span>}
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${projectTitle} screenshot viewer`}>
          <button className="lightbox__close" onClick={() => setActiveIndex(null)} aria-label="Close screenshot viewer">
            <X size={22} />
          </button>

          {images.length > 1 && (
            <button className="lightbox__nav lightbox__nav--left" onClick={goPrevious} aria-label="Previous screenshot">
              <ChevronLeft />
            </button>
          )}

          <figure>
            <img src={images[activeIndex].src} alt={images[activeIndex].alt} />
            {images[activeIndex].caption && <figcaption>{images[activeIndex].caption}</figcaption>}
          </figure>

          {images.length > 1 && (
            <button className="lightbox__nav lightbox__nav--right" onClick={goNext} aria-label="Next screenshot">
              <ChevronRight />
            </button>
          )}
        </div>
      )}
    </>
  );
}
