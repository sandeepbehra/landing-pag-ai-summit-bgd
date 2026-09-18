// components/DownloadBrochure.jsx
export default function DownloadBrochure({ fileId, label = "Download brochure" }) {
  const url = `https://drive.google.com/file/d/1ZmTdvKwdFGGTAPUBYi6RiFLmz1qKcQJ3/view?usp=drive_link`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      // download attribute often ignored for cross-origin; keeping for best-effort
      download
      className="inline-block p-4 bg-background  text-white rounded-lg border-white border-2"
    >
      {label}
    </a>
  );
}
