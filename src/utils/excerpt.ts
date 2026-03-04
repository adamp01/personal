/**
 * Generates a plain-text excerpt from raw MDX body content.
 *
 * Skips leading JSX/HTML blocks (e.g. <Figure>, <Image>) and headings,
 * finds the first real text paragraph, strips inline markdown syntax,
 * and truncates to maxLength characters at a word boundary.
 */
export function getExcerpt(body: string, maxLength = 180): string {
  // Remove import/export lines (MDX module declarations)
  let stripped = body.replace(/^(import|export)\b[^\n]*/gm, "");

  // Remove heading lines so that heading+paragraph blocks aren't skipped wholesale
  stripped = stripped.replace(/^#{1,6}\s+[^\n]*/gm, "").trim();

  // Split into paragraph blocks (separated by one or more blank lines)
  const blocks = stripped.split(/\n{2,}/);

  // Find the first block that is plain prose (not JSX/HTML, not a blockquote)
  const textBlock =
    blocks.find((block) => {
      const t = block.trim();
      if (!t) return false;
      if (t.startsWith("<")) return false;
      if (t.startsWith(">")) return false;
      return true;
    }) ?? "";

  let text = textBlock.trim();

  // Strip inline markdown
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, ""); // images
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"); // links → label only
  text = text.replace(/\*{1,3}([^*\n]+)\*{1,3}/g, "$1"); // bold / italic
  text = text.replace(/_{1,3}([^_\n]+)_{1,3}/g, "$1"); // bold / italic (underscore)
  text = text.replace(/`([^`]+)`/g, "$1"); // inline code

  // Collapse newlines and whitespace
  text = text.replace(/\s+/g, " ").trim();

  if (text.length <= maxLength) return text;

  // Truncate at a word boundary
  const truncated = text.slice(0, maxLength).replace(/\s+\S*$/, "");
  return truncated + "…";
}
