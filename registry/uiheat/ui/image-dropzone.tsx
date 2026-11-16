"use client";

import * as React from "react";
import { UploadCloud, X } from "lucide-react";
import { useDropzone, type DropzoneOptions } from "react-dropzone";

import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

export interface ImageDropzoneProps {
  width?: number;
  height?: number;
  className?: string;
  /** A File (local preview) or a URL string (already uploaded). */
  value?: File | string;
  onChange?: (file?: File) => void | Promise<void>;
  /** Shows a spinner overlay and blocks input, e.g. while uploading. */
  disabled?: boolean;
  dropzoneOptions?: Omit<DropzoneOptions, "disabled">;
}

function formatFileSize(bytes = 0) {
  if (!bytes) return "0 Bytes";
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
}

function errorFor(code: string | undefined, opts?: ImageDropzoneProps["dropzoneOptions"]) {
  switch (code) {
    case "file-too-large":
      return `The file is too large. Max size is ${formatFileSize(opts?.maxSize)}.`;
    case "file-invalid-type":
      return "Invalid file type.";
    case "too-many-files":
      return `You can only add ${opts?.maxFiles ?? 1} file(s).`;
    default:
      return "The file is not supported.";
  }
}

const ImageDropzone = React.forwardRef<HTMLInputElement, ImageDropzoneProps>(
  ({ dropzoneOptions, width, height, value, className, disabled, onChange }, ref) => {
    const [imageUrl, setImageUrl] = React.useState<string | null>(null);

    // Object URLs hold the file in memory until revoked, so release the old
    // one whenever the value changes or the component unmounts.
    React.useEffect(() => {
      if (typeof value === "string") {
        setImageUrl(value);
        return;
      }
      if (!value) {
        setImageUrl(null);
        return;
      }
      const url = URL.createObjectURL(value);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    }, [value]);

    const {
      getRootProps,
      getInputProps,
      acceptedFiles,
      fileRejections,
      isFocused,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      accept: { "image/*": [] },
      multiple: false,
      disabled,
      onDrop: (files) => {
        if (files[0]) void onChange?.(files[0]);
      },
      ...dropzoneOptions,
    });

    const rejection = fileRejections[0];
    const errorMessage = rejection
      ? errorFor(rejection.errors[0]?.code, dropzoneOptions)
      : undefined;

    return (
      <div className="relative">
        {disabled && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-md bg-background/80">
            <Spinner size="md" />
          </div>
        )}
        <div
          {...getRootProps({
            className: cn(
              "relative flex min-h-[150px] min-w-[200px] cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-input transition-colors",
              isFocused && "border-2 border-ring",
              disabled && "pointer-events-none cursor-default opacity-60",
              imageUrl && "min-h-0 min-w-0 border-0 bg-muted p-0 shadow-md",
              (isDragReject || rejection) && "border-destructive bg-destructive/10",
              isDragAccept && "border-primary bg-primary/10",
              className,
            ),
            style: { width, height },
          })}
        >
          <input ref={ref} {...getInputProps()} />

          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="h-full w-full rounded-md object-cover"
              src={imageUrl}
              alt={acceptedFiles[0]?.name ?? "Selected image"}
            />
          ) : (
            <div className="flex flex-col items-center justify-center px-4 text-center text-xs text-muted-foreground">
              <UploadCloud className="mb-2 h-7 w-7" />
              Click or drag an image here to upload
            </div>
          )}

          {imageUrl && !disabled && (
            <button
              type="button"
              aria-label="Remove image"
              className="absolute right-0 top-0 flex h-6 w-6 -translate-y-1/4 translate-x-1/4 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors hover:text-foreground"
              onClick={(e) => {
                e.stopPropagation();
                void onChange?.(undefined);
              }}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {errorMessage && (
          <p className="mt-1 text-xs text-destructive">{errorMessage}</p>
        )}
      </div>
    );
  },
);
ImageDropzone.displayName = "ImageDropzone";

export { ImageDropzone };
