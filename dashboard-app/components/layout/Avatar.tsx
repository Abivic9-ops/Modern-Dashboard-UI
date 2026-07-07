interface AvatarProps {
  size?: number;
}

export function Avatar({ size = 40 }: AvatarProps) {
  return (
    <div
      className="overflow-hidden rounded-full bg-surface-2"
      style={{ width: size, height: size }}
    >
      <img
        src="/avatar.png"
        alt="User avatar"
        className="h-full w-full object-cover overflow-hidden"
        draggable={false}
      />
    </div>
  );
}
