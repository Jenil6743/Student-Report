# Student Report Generator (React)

This React application generates a **student-specific PDF report** that visualises academic performance, assignment status, attendance and PTM history.  
It’s designed for academic institutes or ed-tech platforms that need a shareable monthly report for every learner.

---

## ✨  Key Features

| Feature             | Description                                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------------------------|
| **One-click PDF**   | Generates a multi-page, branded PDF (via **jsPDF** & **jspdf-autotable**) with tables, charts and logos.       |
| **Dynamic Charts**  | Builds bar, pie and stacked charts with **Chart.js**, snapshots them using **html2canvas**, embeds in the PDF.|
| **Fully Offline**   | Everything renders client-side; no server dependencies or data leaks.                                         |
| **Clean UI**        | Single **Generate Monthly Report** button plus a preview line-chart of recent tests.                          |
| **Extensible Data** | JSON schema covers user info, tests, assignments, PTMs and attendance – easy to replace with API data.        |

---


