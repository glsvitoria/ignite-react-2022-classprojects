import { TextareaHTMLAttributes, useEffect, useRef } from "react";

import { useField } from "@unform/core";
import { overrideTailwindClasses } from "tailwind-override";

import styles from "./styles.module.scss";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  containerClassName?: string;
}

export default function Textarea({
  label,
  name,
  containerClassName = "",
  className,
  ...rest
}: ITextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { defaultValue, error, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({ name: fieldName, ref: textareaRef.current, path: "value" });
  }, [registerField, fieldName]);

  return (
    <div
      className={overrideTailwindClasses(
        `${styles.container} ${containerClassName}`,
      )}
    >
      <label htmlFor={fieldName}>{label}</label>
      <textarea
        ref={textareaRef}
        id={fieldName}
        name={fieldName}
        defaultValue={defaultValue}
        className={overrideTailwindClasses(`
        ${className} ${error ? styles.error : ""}`)}
        {...rest}
      />

      {error && <span>{error}</span>}
    </div>
  );
}
