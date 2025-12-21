// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

export default function SessionLayout({ children }) {
  // Return children only, no menu bar or the footer
  return <>{children}</>;
}
