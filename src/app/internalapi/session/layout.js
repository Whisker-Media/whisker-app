export default function SessionLayout({ children }) {
  // Return children only, no menu bar or the footer
  return <>{children}</>;
}
