import Image from "next/image";

export default function BypassLogo({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[22%] shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/bypass/logo.png"
        alt="Bypass"
        fill
        sizes={`${size}px`}
        className="object-cover"
      />
    </div>
  );
}
