import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ProjectImage } from "../data/projects";

type Props = { images: ProjectImage[]; projectTitle: string };

export default function ProjectGallery({ images, projectTitle }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const trigger = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [isOpen]);

  function navigate(direction: number) {
    setFailed(false);
    setActiveIndex((current) =>
      current === null
        ? null
        : (current + direction + images.length) % images.length,
    );
  }

  if (!images.length) return null;
  const current = activeIndex === null ? null : images[activeIndex];
  return (
    <>
      <div
        className="project-gallery"
        aria-label={`${projectTitle} screenshots`}
      >
        {images.map((image, index) => (
          <button
            type="button"
            className="project-gallery__item"
            key={`${image.src}-${index}`}
            onClick={() => {
              setFailed(false);
              setActiveIndex(index);
            }}
            aria-label={`Open ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width="480"
              height="300"
            />
            {image.caption ? <span>{image.caption}</span> : null}
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={`${projectTitle} screenshot viewer`}
        onCancel={(event) => {
          event.preventDefault();
          setActiveIndex(null);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setActiveIndex(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") navigate(1);
          if (event.key === "ArrowLeft") navigate(-1);
        }}
      >
        <button
          className="lightbox__close"
          type="button"
          onClick={() => setActiveIndex(null)}
          aria-label="Close screenshot viewer"
          autoFocus
        >
          <X size={22} />
        </button>
        {current ? (
          <div className="lightbox-content">
            <figure>
              {failed ? (
                <p role="status">This screenshot could not be loaded.</p>
              ) : (
                <img
                  src={current.src}
                  alt={current.alt}
                  onError={() => setFailed(true)}
                />
              )}
              {current.caption ? (
                <figcaption>{current.caption}</figcaption>
              ) : null}
            </figure>
            <div className="lightbox-controls">
              {images.length > 1 ? (
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={22} />
                </button>
              ) : null}
              <span aria-live="polite">
                {(activeIndex ?? 0) + 1} / {images.length}
              </span>
              {images.length > 1 ? (
                <button
                  type="button"
                  onClick={() => navigate(1)}
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={22} />
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
