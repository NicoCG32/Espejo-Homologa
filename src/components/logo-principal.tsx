import { useCallback, useState } from "react";

type LogoPrincipalProps = {
  className?: string;
  alt?: string;
  eager?: boolean;
};

export function LogoPrincipal({
  className,
  alt = "Espejo: Homologa",
  eager = false,
}: LogoPrincipalProps) {
  const [listo, setListo] = useState(false);
  const detectarCarga = useCallback((imagen: HTMLImageElement | null) => {
    if (imagen?.complete && imagen.naturalWidth > 0) setListo(true);
  }, []);

  return (
    <span
      className={`logo-principal${listo ? " logo-principal-listo" : ""}${className ? ` ${className}` : ""}`}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
    >
      <span className="logo-principal-skeleton" aria-hidden="true" />
      <img
        ref={detectarCarga}
        src="/brand/espejo-logo-horizontal-claro.svg"
        alt=""
        aria-hidden="true"
        className="logo-principal-imagen logo-principal-claro"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        onLoad={() => setListo(true)}
      />
      <img
        ref={detectarCarga}
        src="/brand/espejo-logo-horizontal-oscuro.svg"
        alt=""
        aria-hidden="true"
        className="logo-principal-imagen logo-principal-oscuro"
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        onLoad={() => setListo(true)}
      />
    </span>
  );
}
