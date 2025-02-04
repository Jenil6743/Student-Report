import React, { useRef } from 'react';
import keystone_logo from './logo-Keystone.png';
import prepseed_logo from './prepseed.jpeg';
import './App.css';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import html2canvas from "html2canvas";
import LineChart from './LineChart';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function App() {
  const chartRef = useRef(null);
  const barChartContainerRef = useRef(null);
  const assignmentsPieChart = useRef(null);
  const assignmentsStackedBarChart = useRef(null);
  const attendanceStackedColumnsChart = useRef(null);

  const data = {
    "user_data": {
      "Name": "Dwija Mehta",
      "Email": "Dwija6318@keystoneuniverse.com",
      "Mobile Number": "7600016318",
      "Standard": "Class 9 Science",
      "Unique Code": "07265",
      "Board": "ICSE",
      "Batch": "B1",
      "Phases": "Anandnagar Road",
      "Subjects": "Mathematics, Physics, Chemistry, Biology, Geography, English Language, English Literature, History Civics"
    },
    "tests_data": {
      "IC9s-HC-WCT-18/07-7482": {
        "total": {
          "user_marks": 18,
          "max_marks": 25,
          "average_marks": 16.67,
          "highest_marks": 19.5
        },
        "subjects": {
          "History Civics": {
            "user_marks": 18,
            "max_marks": 25,
            "average_marks": 16.67,
            "highest_marks": 19.5
          }
        },
        "details": {
          "test_name": "IC9s-HC-WCT-18/07-7482",
          "test_date": "2024-07-18T13:30:00",
          "duration": "01:00",
          "test_mark": "25",
          "user_status": "Present"
        }
      },
      "IC9s-Math-WCT-21/07-7883": {
        "total": {
          "user_marks": 8,
          "max_marks": 25,
          "average_marks": 14,
          "highest_marks": 20
        },
        "subjects": {
          "Mathematics": {
            "user_marks": 8,
            "max_marks": 25,
            "average_marks": 14,
            "highest_marks": 20
          }
        },
        "details": {
          "test_name": "IC9s-Math-WCT-21/07-7883",
          "test_date": "2024-07-21T04:30:00",
          "duration": "01:00",
          "test_mark": "25",
          "user_status": "Present"
        }
      },
      "IC9s-Bio-WCT-21/07-8161": {
        "total": {
          "user_marks": 24,
          "max_marks": 25,
          "average_marks": 24.5,
          "highest_marks": 25
        },
        "subjects": {
          "Biology": {
            "user_marks": 24,
            "max_marks": 25,
            "average_marks": 24.5,
            "highest_marks": 25
          }
        },
        "details": {
          "test_name": "IC9s-Bio-WCT-21/07-8161",
          "test_date": "2024-07-21T03:30:00",
          "duration": "00:45",
          "test_mark": "25",
          "user_status": "Present"
        }
      },
      "IC9s-Math-HYT-21/07-8261": {
        "total": {
          "user_marks": 0,
          "max_marks": 77,
          "average_marks": 44,
          "highest_marks": 44
        },
        "subjects": {
          "Mathematics": {
            "user_marks": 0,
            "max_marks": 77,
            "average_marks": 44,
            "highest_marks": 44
          }
        },
        "details": {
          "test_name": "IC9s-Math-HYT-21/07-8261",
          "test_date": "2024-07-21T03:30:00",
          "duration": "02:30",
          "test_mark": "77",
          "user_status": "Absent"
        }
      },
      "IC9s-E (Lan)-WCT-25/07-8332": {
        "total": {
          "user_marks": 16,
          "max_marks": 25,
          "average_marks": 12.75,
          "highest_marks": 17
        },
        "subjects": {
          "English Language": {
            "user_marks": 16,
            "max_marks": 25,
            "average_marks": 12.75,
            "highest_marks": 17
          }
        },
        "details": {
          "test_name": "IC9s-E (Lan)-WCT-25/07-8332",
          "test_date": "2024-07-25T11:30:00",
          "duration": "01:00",
          "test_mark": "25",
          "user_status": "Present"
        }
      },
      "IC9s-Phy-WCT-28/07-8485": {
        "total": {
          "user_marks": 12,
          "max_marks": 25,
          "average_marks": 15.4,
          "highest_marks": 20
        },
        "subjects": {
          "Physics": {
            "user_marks": 12,
            "max_marks": 25,
            "average_marks": 15.4,
            "highest_marks": 20
          }
        },
        "details": {
          "test_name": "IC9s-Phy-WCT-28/07-8485",
          "test_date": "2024-07-28T04:30:00",
          "duration": "00:45",
          "test_mark": "25",
          "user_status": "Present"
        }
      },
      "IC9s-Geo-WCT-01/08-9013": {
        "total": {
          "user_marks": 18.5,
          "max_marks": 25,
          "average_marks": 15.5,
          "highest_marks": 21.5
        },
        "subjects": {
          "Geography": {
            "user_marks": 18.5,
            "max_marks": 25,
            "average_marks": 15.5,
            "highest_marks": 21.5
          }
        },
        "details": {
          "test_name": "IC9s-Geo-WCT-01/08-9013",
          "test_date": "2024-08-01T13:30:00",
          "duration": "01:00",
          "test_mark": "25",
          "user_status": "Present"
        }
      },
      "IC9s-Chem-WCT-28/07-9022": {
        "total": {
          "user_marks": 9.5,
          "max_marks": 20,
          "average_marks": 10,
          "highest_marks": 12.5
        },
        "subjects": {
          "Chemistry": {
            "user_marks": 9.5,
            "max_marks": 20,
            "average_marks": 10,
            "highest_marks": 12.5
          }
        },
        "details": {
          "test_name": "IC9s-Chem-WCT-28/07-9022",
          "test_date": "2024-07-28T03:00:00",
          "duration": "00:45",
          "test_mark": "20",
          "user_status": "Present"
        }
      }
    },
    "assignments_data": {
      "assignments": [
        {
          "type": "Homework",
          "title": "IC9s-Phy-B1-19/07-21964",
          "assigned_date": "2024-07-19T00:00:00",
          "due_date": "2024-07-22T23:59:59.999000",
          "subject": "Physics",
          "status": "Submitted"
        },
        {
          "type": "Homework",
          "title": "IC9s-Phy-B1-22/07-22787",
          "assigned_date": "2024-07-22T00:00:00",
          "due_date": "2024-07-26T23:59:59.999000",
          "subject": "Physics",
          "status": "Submitted"
        },
      
      ]
    },
    "ptms_data": {
      "ptms": [
        {
          "name": "IC9s-15:30-20/07-16",
          "scheduled_date": "2024-07-20T00:00:00",
          "scheduled_time": "15:30",
          "mode": "In Person",
          "purpose": "To understand the Academic difficulties ",
          "recommended_by": "Academic Manager",
          "standard": "Class 9 Science",
          "user_status": "Present"
        }
      ]
    },
    "attendance_data": {
      "attendance": [
        {
          "date": "2024-07-01T13:07:09",
          "subject": "Mathematics",
          "type": "Regular Session",
          "user_status": "Present"
        },
        {
          "date": "2024-07-01T13:07:27",
          "subject": "Physics",
          "type": "Regular Session",
          "user_status": "Present"
        },
        {
          "date": "2024-07-03T13:09:34",
          "subject": "Mathematics",
          "type": "Regular Session",
          "user_status": "Absent"
        }
      ]
    }
  }

  const formatDate = (dateString, includeTime = true) => {
    if (!dateString) return 'N/A';

    const date = new Date(dateString);
    if (isNaN(date)) return 'Invalid Date';

    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    if (!includeTime) return formattedDate;

    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate}, ${formattedTime}`;
  };
  /**
  * Creates a bar chart for the given subject data in a hidden container,
  * then uses html2canvas to capture it, returning a dataURL.
  */
  async function createOverallSubjectBarChartInDOM(subjectNames, subjectPercentages, container) {
    // Create arrays of objects to maintain relationship during sorting
    let combinedData = subjectNames.map((name, index) => ({
      name: name,
      percentage: subjectPercentages[index]
    }));

    // Sort the combined data in descending order
    combinedData.sort((a, b) => b.percentage - a.percentage);

    // Extract sorted arrays
    const sortedNames = combinedData.map(item => item.name);
    const sortedPercentages = combinedData.map(item => item.percentage);

    return new Promise(async (resolve) => {
      // 1) Create a wrapper <div> that we'll attach to `container`
      const wrapper = document.createElement('div');
      wrapper.style.background = '#FFFFFF'; // White background for clean capture
      container.appendChild(wrapper);

      // 2) Create the canvas inside wrapper
      const canvasId = `overall-subjects-bar-chart-${Date.now()}`;
      const canvas = document.createElement('canvas');
      canvas.id = canvasId;
      wrapper.style.padding = '20px';
      wrapper.appendChild(canvas);

      // 3) Build the Chart.js bar chart
      const ctx = canvas.getContext('2d');

      // Create a vertical gradient for the bars
      const gradientBar = ctx.createLinearGradient(0, 0, 0, 300);
      gradientBar.addColorStop(0, 'rgba(51, 161, 255, 0.5)'); // top
      gradientBar.addColorStop(1, 'rgba(51, 161, 255, 0.1)'); // bottom

      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: sortedNames.map((name) =>
            name.length > 10 ? `${name.substring(0, 10)}...` : name
          ),
          datasets: [
            {
              data: sortedPercentages,
              backgroundColor: gradientBar,
              borderColor: 'rgba(51, 161, 255, 1)',
              borderWidth: 1,
              fill: true,
            },
          ],
        },
        options: {
          animation: {
            duration: 0,
          },
          categoryPercentage: 0.7,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Subjects',
                font: {
                  size: 10,
                  weight: 'bold',
                },
                color: 'black',
              },
              ticks: {
                autoSkip: false,
                maxRotation: 20,
                minRotation: 0,
                font: {
                  size: 8,
                },
                color: 'black',
              },
              grid: {
                display: false,
              },
            },
            y: {
              title: {
                display: true,
                text: 'Marks (%)',
                font: {
                  size: 10,
                  weight: 'bold',
                },
                color: 'black',
              },
              ticks: {
                font: {
                  size: 8,
                },
                color: 'black',
              },
              grid: {
                display: true,
              },
              suggestedMin: 0,
              suggestedMax: 100,
            },
          },
        },
      });

      // 4) Give Chart.js a moment or use onComplete callback; here, we do a small delay
      setTimeout(async () => {
        try {
          // 5) Capture the wrapper (containing canvas) as an image
          const canvasImage = await html2canvas(wrapper, { scale: 2 });
          const dataUrl = canvasImage.toDataURL('image/png');

          // 6) Cleanup
          chart.destroy();
          container.removeChild(wrapper);

          resolve(dataUrl);
        } catch (err) {
          console.error('Error capturing overall bar chart:', err);
          chart.destroy();
          container.removeChild(wrapper);
          resolve(null);
        }
      }, 500);
    });
  }
  async function createPieChart(statusCounts, container) {
    const wrapper = document.createElement('div');
    wrapper.style.background = '#FFFFFF'; // white background for a clean capture
    wrapper.style.padding = '20px';
    container.appendChild(wrapper);

    // 2) Create the canvas with a unique ID and fixed dimensions
    const canvasId = `assignment-pie-chart-${Date.now()}`;
    const canvas = document.createElement('canvas');
    canvas.id = canvasId;
    // Set the canvas dimensions explicitly (if needed for your PDF generation)
    canvas.width = 300;
    canvas.height = 300;
    wrapper.appendChild(canvas);

    // 3) Prepare your data: convert statusCounts object into labels and data arrays
    const labels = Object.keys(statusCounts);
    const dataVals = Object.values(statusCounts);

    // 4) Get the canvas context and create the Chart.js pie chart
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            label: 'Assignments Status',
            data: dataVals,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
              // Add more colors if there are additional statuses
            ],
          },
        ],
      },
      options: {
        animation: {
          duration: 0,
        },
        responsive: false, // fixed size for easier PDF generation
        // Chart.js will use the canvas's width and height attributes
      },
    });

    // 5) Wait briefly to ensure the chart is fully rendered
    await new Promise((resolve) => setTimeout(resolve, 100));

    // 6) Capture the wrapper (with the canvas and the rendered chart) as an image using html2canvas
    let dataUrl;
    try {
      const canvasImage = await html2canvas(wrapper, { scale: 2 });
      dataUrl = canvasImage.toDataURL('image/png');
    } catch (err) {
      console.error('Error capturing pie chart:', err);
      dataUrl = null;
    }

    // 7) Cleanup: Destroy the chart and remove the wrapper from the DOM
    chart.destroy();
    container.removeChild(wrapper);

    return dataUrl;
  }

  async function createStackedBarChart(subjectMap, container) {
    // 1) Create a wrapper <div> and attach it to the container
    const wrapper = document.createElement('div');
    wrapper.style.background = '#FFFFFF'; // white background for clean capture
    wrapper.style.padding = '20px';
    container.appendChild(wrapper);

    // 2) Create the canvas with fixed dimensions
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 300;
    wrapper.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // 3) Extract data from subjectMap:
    //    - Get all unique subjects (for the x-axis)
    //    - Gather all possible statuses across subjects (for the stacked datasets)
    const subjects = Object.keys(subjectMap);
    const statusSet = new Set();
    subjects.forEach((subj) => {
      const subjStatuses = Object.keys(subjectMap[subj]);
      subjStatuses.forEach((status) => statusSet.add(status));
    });
    const allStatuses = Array.from(statusSet);

    // 4) Build the datasets for each status
    const datasets = allStatuses.map((status, idx) => ({
      label: status,
      data: subjects.map((subj) => subjectMap[subj][status] || 0),
      backgroundColor: pickColor(idx),
    }));

    // 5) Create the stacked bar chart using Chart.js
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: subjects, // x-axis labels
        datasets: datasets,
      },
      options: {
        animation: {
          duration: 0,
        },
        responsive: false, // fixed size for easier PDF generation
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });

    // 6) Wait briefly to ensure the chart is fully rendered
    await new Promise((resolve) => setTimeout(resolve, 100));

    // 7) Capture the wrapper (with the canvas and rendered chart) as an image using html2canvas
    let dataUrl;
    try {
      const canvasImage = await html2canvas(wrapper, { scale: 2 });
      dataUrl = canvasImage.toDataURL('image/png');
    } catch (err) {
      console.error('Error capturing stacked bar chart:', err);
      dataUrl = null;
    }

    // 8) Cleanup: Destroy the chart and remove the wrapper from the DOM
    chart.destroy();
    container.removeChild(wrapper);

    return dataUrl;
  }

  async function createStackedColumnsChart(subjects, dataset, container) {
    const wrapper = document.createElement('div');
    wrapper.style.background = '#FFFFFF'; // white background for clean capture
    wrapper.style.padding = '20px';
    container.appendChild(wrapper);

    // 2) Create the canvas with fixed dimensions
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 300;
    wrapper.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    // Create the Chart
    const attendanceChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: subjects,  // Subjects appear along the Y-axis
        datasets: dataset
      },
      options: {
        animation:{
          duration:0
        },
        indexAxis: 'y', // This makes the bars horizontal
        scales: {
          x: {
            stacked: true,
            title: {
              display: true,
              text: 'Count',
              color: 'black' // Set the x-axis title color to black
            },
            ticks: {
              color: 'black' // Set the x-axis tick color to black
            }
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Subject',
              color: 'black' // Set the y-axis title color to black
            },
            ticks: {
              color: 'black' // Set the y-axis tick color to black
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Attendance by Subject and Status',
            color: 'black' // Chart title in black
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            bodyColor: 'black',   // Tooltip body text color
            titleColor: 'black'   // Tooltip title text color
          },
          legend: {
            labels: {
              color: 'black' // Legend text color
            }
          }
        },
        responsive: true
      }
    });
    // 6) Wait briefly to ensure the chart is fully rendered
    await new Promise((resolve) => setTimeout(resolve, 100));

    // 7) Capture the wrapper (with the canvas and rendered chart) as an image using html2canvas
    let dataUrl;
    try {
      const canvasImage = await html2canvas(wrapper, { scale: 2 });
      dataUrl = canvasImage.toDataURL('image/png');
    } catch (err) {
      console.error('Error capturing stacked bar chart:', err);
      dataUrl = null;
    }

    // 8) Cleanup: Destroy the chart and remove the wrapper from the DOM
    attendanceChart.destroy();
    container.removeChild(wrapper);

    return dataUrl;
  }
  function pickColor(index) {
    // Preset color palette; add more colors if you expect more statuses.
    const colors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
      '#9966FF', '#FF9F40', '#8E44AD', '#1ABC9C',
    ];
    return colors[index % colors.length];
  }



  const generatePDF = async () => {
    const doc = new jsPDF('p', 'pt');
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const PAGE_HEIGHT = pageHeight;
    const MARGIN_LEFT = 40;
    const MARGIN_TOP = 40;
    const SECTION_SPACING = 20;
    const GRAPH_HEIGHT = 320;


    class PDFCoordinator {
      constructor(doc) {
        this.doc = doc;
        this.currentY = MARGIN_TOP;
      }

      /**
       * Ensures there's space for content like graphs/images
       * so they don't get cut off at the bottom.
       */
      ensureSpace(requiredSpace) {
        if (this.currentY + requiredSpace > PAGE_HEIGHT) {
          this.doc.addPage();
          this.currentY = MARGIN_TOP;
        }
        return this.currentY;
      }

      /**
       * Forces a brand-new page for the start of each major section,
       * then prints the section title at the top.
       */
      addSectionTitle(title, fontSize = 14) {
        this.doc.addPage(); // New page for each major section
        this.currentY = MARGIN_TOP;

        this.doc.setFontSize(fontSize);
        this.doc.setFont('helvetica', 'bold');
        this.doc.text(title, MARGIN_LEFT, this.currentY);

        // Return to normal font
        this.doc.setFontSize(10);
        this.doc.setFont('helvetica', 'normal');

        this.currentY += SECTION_SPACING;
      }

      /**
       * Create a table using autoTable, letting autoTable manage pagination.
       */
      addTable(columns, rows, rowColorCallback) {
        const startY = this.currentY;

        this.doc.autoTable({
          startY,
          head: [columns],
          body: rows,
          margin: { left: MARGIN_LEFT, right: MARGIN_LEFT },
          styles: {
            fontSize: 10,
            cellPadding: 5,
            lineWidth: 0.2,
            lineColor: [200, 200, 200],
          },
          headStyles: { fillColor: [1, 142, 251] },
          theme: 'striped',
          showHead: 'everyPage',
          didParseCell: (dataCell) => {
            if (rowColorCallback) rowColorCallback(dataCell);
          },
        });

        // autoTable sets doc.lastAutoTable.finalY to where the table ended
        const finalY = this.doc.lastAutoTable.finalY;
        this.currentY = finalY + SECTION_SPACING;
      }

      /**
       * Adds an image-based chart/graph.
       * If it doesn't fit on the current page, adds a new page first.
       */
      addPerformanceGraph(imgData) {
        if (!imgData) return;

        this.ensureSpace(GRAPH_HEIGHT + SECTION_SPACING);
        this.doc.text('Performance Graph', MARGIN_LEFT, this.currentY);
        const imageTop = this.currentY + 10;

        this.doc.addImage(imgData, 'PNG', 10, imageTop, 550, 300);
        this.currentY = imageTop + 300 + SECTION_SPACING;
      }

      /**
       * Prints a "no data" message at the current Y position.
       */
      noDataMessage() {
        this.doc.text(
          'This data is not available for the selected duration.',
          MARGIN_LEFT,
          this.currentY
        );
        this.currentY += SECTION_SPACING;
      }
    }

    // Capture chart image
    let imgData = null;
    if (chartRef.current) {
      try {
        const canvas = await html2canvas(chartRef.current);
        imgData = canvas.toDataURL('image/png');
      } catch (error) {
        console.error('Error capturing chart image:', error);
      }
    }

    // Load logos
    const keystoneLogo = new Image();
    keystoneLogo.src = keystone_logo;

    const prepseedLogo = new Image();
    prepseedLogo.src = prepseed_logo;

    // Helper for a one-off table on the cover page
    function createTable(columns, rows, startY, rowColorCallback) {
      doc.autoTable({
        startY,
        head: [columns],
        body: rows,
        margin: { left: MARGIN_LEFT, right: MARGIN_LEFT },
        columnStyles: {
          0: { cellWidth: '300' },
          1: { cellWidth: 'auto' }
        }
        ,
        styles: {
          fontSize: 10,
          cellPadding: 5,
          lineWidth: 0.2,
          lineColor: [200, 200, 200],
        },
        headStyles: { fillColor: [1, 142, 251] },
        theme: 'striped',
        showHead: 'everyPage',
        didParseCell: (dataCell) => {
          if (rowColorCallback) rowColorCallback(dataCell);
        },
      });
    }

    // COVER PAGE (page 1)
    doc.addImage(keystoneLogo, 'PNG', 190, 20, 200, 80);

    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Student Report', pageWidth / 2, 130, { align: 'center' });

    // User Details on cover
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const userData = data.user_data || {};
    const userKeys = Object.keys(userData);
    const userColumns = ['Detail', 'Value'];
    const userRows = userKeys.map((key) => [
      key.charAt(0).toUpperCase() + key.slice(1),
      userData[key] || 'N/A',
    ]);
    createTable(userColumns, userRows, 170);

    // Powered by
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.text('Powered by', pageWidth / 2, pageHeight - 100, { align: 'center' });
    doc.addImage(
      prepseedLogo,
      'PNG',
      (pageWidth - 80) / 2,
      pageHeight - 90,
      80,
      80
    );

    // Initialize our PDFCoordinator for subsequent sections
    const coordinator = new PDFCoordinator(doc);

    // ================================
    // TESTS SECTION
    // ================================
    coordinator.addSectionTitle('Tests');

    // 1) Title before the main test table

    // Add performance graph (if available)
    coordinator.addPerformanceGraph(imgData);

    const testsData = data.tests_data || {};
    const testKeys = Object.keys(testsData);

    if (testKeys.length === 0) {
      coordinator.noDataMessage();
    } else {
      // Main tests table
      const columns = [
        'Test Name',
        'Date',
        'Duration',
        'Status',
        'User Marks',
        'Highest',
        'Average',
      ];
      const rows = testKeys.map((testId) => {
        const test = testsData[testId] || {};
        const d = test.details || {};
        const t = test.total || {};

        return [
          d.test_name || 'N/A',
          formatDate(d.test_date),
          d.duration || '0 mins',
          d.user_status,
          t.user_marks != null ? `${t.user_marks} / ${t.max_marks}` : '0',
          t.highest_marks != null ? `${t.highest_marks} / ${t.max_marks}` : '0',
          t.average_marks != null ? `${t.average_marks} / ${t.max_marks}` : '0',
        ];
      });
      coordinator.doc.setFont('helvetica', 'bold');
      coordinator.doc.setFontSize(12)
      coordinator.doc.text("User's Tests Performance", MARGIN_LEFT, coordinator.currentY);
      coordinator.currentY += 15;
      coordinator.doc.setFont('helvetica', 'normal');
      coordinator.doc.setFontSize(10)

      coordinator.addTable(columns, rows, (dataCell) => {
        // Coloring logic for "User Marks"
        if (dataCell.section === 'body' && dataCell.column.index === 4) {
          const rawValue = dataCell.cell.raw;
          if (!rawValue.includes('/')) return;
          const [marksText, maxMarksText] = rawValue.split('/').map((t) => t.trim());
          const marks = parseFloat(marksText);
          const maxMarks = parseFloat(maxMarksText) || 1;
          const percentage = (marks / maxMarks) * 100;

          if (percentage < 33) {
            dataCell.cell.styles.textColor = [255, 0, 0];
          } else if (percentage <= 80) {
            dataCell.cell.styles.textColor = [255, 165, 0];
          } else {
            dataCell.cell.styles.textColor = [0, 128, 0];
          }
        }
      });

      // 2) Title after the test details table
      coordinator.currentY += 15;
      coordinator.doc.setFont('helvetica', 'bold');
      coordinator.doc.setFontSize(12)
      coordinator.doc.text('Subject-wise Test Details', MARGIN_LEFT, coordinator.currentY);
      coordinator.currentY += 25;
      coordinator.doc.setFont('helvetica', 'normal');
      coordinator.doc.setFontSize(10)

      // Subject-wise Performance tables
      testKeys.forEach(async (testId) => {
        const test = testsData[testId];
        if (!test?.details) return;

        const subjects = test.subjects || {};
        if (Object.keys(subjects).length === 0) return;

        // Prepare table columns/rows
        const subjectColumns = [
          'Subject Name',
          'User Marks',
          'Highest',
          'Average',
        ];
        const subjectRows = Object.keys(subjects).map((subjectName) => {
          const subject = subjects[subjectName] || {};
          return [
            subjectName || 'Unknown',
            subject.user_marks != null
              ? `${subject.user_marks} / ${subject.max_marks}`
              : '0',
            subject.highest_marks != null
              ? `${subject.highest_marks} / ${subject.max_marks}`
              : '0',
            subject.average_marks != null
              ? `${subject.average_marks} / ${subject.max_marks}`
              : '0',
          ];
        });

        // --- APPROXIMATE SPACE CALCULATION ---
        // This is NOT exact, but helps avoid orphaning the subtitle.
        // Let's assume ~25 px per row plus 40 px overhead for the table header + subtitle gap.
        const rowHeight = 25;
        const overhead = 40; // extra for subtitle line & table header
        const approxNeeded = subjectRows.length * rowHeight + overhead;

        // Force a new page if there's not enough space to print the subtitle + table
        coordinator.ensureSpace(approxNeeded);

        // Print the sub-subtitle (test name):
        doc.setFont('helvetica', 'bold');
        coordinator.doc.text(
          test.details.test_name || 'Unknown Test',
          MARGIN_LEFT,
          coordinator.currentY
        );
        doc.setFont('helvetica', 'normal');
        coordinator.currentY += 15;

        // Render the table
        coordinator.addTable(subjectColumns, subjectRows);
      });
    }
    // 1) Aggregate subject data
    const subjectAggregates = {};
    Object.keys(testsData).forEach((testId) => {
      const test = testsData[testId];
      if (!test?.details) return;

      const subjects = test.subjects || {};
      Object.keys(subjects).forEach((subj) => {
        const sData = subjects[subj];
        if (!subjectAggregates[subj]) {
          subjectAggregates[subj] = { totalMarks: 0, totalMax: 0 };
        }
        subjectAggregates[subj].totalMarks += sData.user_marks || 0;
        subjectAggregates[subj].totalMax += sData.max_marks || 0;
      });
    });

    // 2) Compute percentages
    const subjectNames = Object.keys(subjectAggregates);
    if (subjectNames.length > 0) {
      const subjectPercentages = subjectNames.map((subj) => {
        const { totalMarks, totalMax } = subjectAggregates[subj];
        return totalMax ? ((totalMarks / totalMax) * 100).toFixed(2) : '0';
      });

      // 3) Create the chart image
      const overallBarChartDataUrl = await createOverallSubjectBarChartInDOM(
        subjectNames,
        subjectPercentages,
        barChartContainerRef.current // your hidden container ref
      );

      // 4) Insert image into the PDF
      if (overallBarChartDataUrl) {
        // Suppose you have a PDFCoordinator instance named coordinator
        coordinator.ensureSpace(350); // space for your chart
        coordinator.doc.setFont('helvetica', 'bold');
        coordinator.doc.setFontSize(12);
        coordinator.doc.text('Overall Subject-wise Percentage', 40, coordinator.currentY);
        coordinator.currentY += 15;

        // Insert the chart
        coordinator.doc.addImage(overallBarChartDataUrl, 'PNG', 40, coordinator.currentY, 500, 250);
        coordinator.currentY += 280;
        // --- Add a table of the aggregated subject-wise percentages ---
        coordinator.ensureSpace(150); // ensure there's room for the table
        coordinator.doc.setFont('helvetica', 'bold');
        coordinator.doc.setFontSize(12);
        coordinator.doc.text(
          'Overall Subject-wise Percentage Table',
          MARGIN_LEFT,
          coordinator.currentY
        );
        coordinator.currentY += 15;
        coordinator.doc.setFont('helvetica', 'normal');
        coordinator.doc.setFontSize(10);

        // Define columns
        const subjectPercentageColumns = [
          'Subject Name',
          'Obtained Marks',
          'Max Marks',
          'Percentage (%)',
        ];

        // Create rows
        const subjectPercentageRows = subjectNames.map((subjectName) => {
          const { totalMarks, totalMax } = subjectAggregates[subjectName];
          const percentage = totalMax ? ((totalMarks / totalMax) * 100).toFixed(2) : '0';

          return [
            subjectName,
            String(totalMarks),
            String(totalMax),
            `${percentage}%`,
          ];
        });

        // Add the table
        coordinator.addTable(subjectPercentageColumns, subjectPercentageRows);
      } else {
        // No subjects => no aggregates
        coordinator.noDataMessage();
      }
    }

    // ================================
    // ASSIGNMENTS SECTION
    // ================================
    coordinator.addSectionTitle('Assignments');

    const assignmentsData = data.assignments_data?.assignments || [];
    if (assignmentsData.length === 0) {
      coordinator.noDataMessage();
    } else {
      //
      // 1) Identify all statuses
      //
      // We'll create a set (or dictionary) to store the unique statuses
      const statusCounts = {};
      // We'll also store subject-wise breakdown: subject -> { status -> count }
      const subjectMap = {};
      const statusesSet = new Set();
      assignmentsData.forEach((item) => {
        // Use a default value of 'Unknown' if no status is provided.
        statusesSet.add(item.status || 'Unknown');
      });
      const statuses = Array.from(statusesSet); // Dynamic columns based on the attendance data.
      const attendanceMap = {};
      assignmentsData.forEach((item) => {
        const subject = item.subject || 'Unknown';
        const status = item.status || 'Unknown';
        if (!attendanceMap[subject]) {
          attendanceMap[subject] = {};
        }
        attendanceMap[subject][status] = (attendanceMap[subject][status] || 0) + 1;
      });

      assignmentsData.forEach((item) => {
        const status = item.status || 'Unknown';
        const subject = item.subject || 'Unknown';

        // Pie chart data (overall status counts)
        statusCounts[status] = (statusCounts[status] || 0) + 1;

        // Stacked bar data (subject + status)
        if (!subjectMap[subject]) subjectMap[subject] = {};
        if (!subjectMap[subject][status]) {
          subjectMap[subject][status] = 0;
        }
        subjectMap[subject][status]++;
      });


      //
      // 2) Generate the chart images from Chart.js
      //    We'll show example functions below
      //
      const pieChartUrl = await createPieChart(statusCounts, assignmentsPieChart.current);
      const stackedBarUrl = await createStackedBarChart(subjectMap, assignmentsStackedBarChart.current);
      //
      // 3) Add both charts side by side
      //
      coordinator.ensureSpace(250);
      coordinator.doc.setFont('helvetica', 'bold');
      coordinator.doc.setFontSize(12);
      coordinator.doc.text('Assignments Status', MARGIN_LEFT, coordinator.currentY);
      coordinator.currentY += 15;

      const imgWidth = 250;
      const imgHeight = 250;
      // Insert the pie chart on the left
      coordinator.doc.addImage(
        pieChartUrl,      // data URL
        'PNG',
        MARGIN_LEFT,      // x
        coordinator.currentY, // y
        imgWidth,         // width
        imgHeight         // height
      );
      // Insert the stacked bar chart on the right
      coordinator.doc.addImage(
        stackedBarUrl,
        'PNG',
        MARGIN_LEFT + 250, // x (shift to the right for side-by-side)
        coordinator.currentY,
        imgWidth,
        imgHeight
      );

      // Move currentY below both charts
      coordinator.currentY += imgHeight + 20;

      //
      const columns = [
        'Title',
        'Type',
        'Assigned Date',
        'Due Date',
        'Subject',
        'Status',
      ];
      const rows = assignmentsData.map((a) => [
        a.title,
        a.type,
        formatDate(a.assigned_date, false),
        formatDate(a.due_date, false),
        a.subject,
        a.status,
      ]);

      coordinator.addTable(columns, rows, (dataCell) => {
        if (dataCell.section === 'body' && dataCell.column.index === 5) {
          dataCell.cell.styles.textColor =
            dataCell.cell.raw === 'Submitted' ? [0, 128, 0] : [255, 0, 0];
        }
      });
      // 3) Build the table columns and rows.
      // The first column will always be "Subject" followed by the dynamic status columns.
      const tableColumns = ['Subject', 'Total', ...statuses];
      const tableRows = [];

      // For each subject, add a row that includes the count for each status (or 0 if not present).
      for (const subject in attendanceMap) {
        let subjectTotal = 0;
        // First calculate the total count for the subject.
        statuses.forEach((status) => {
          subjectTotal += attendanceMap[subject][status] || 0;
        });

        // Build the row: subject name, subject total, then each status count.
        const row = [subject, subjectTotal];
        statuses.forEach((status) => {
          row.push(attendanceMap[subject][status] || 0);
        });
        tableRows.push(row);
      }
      const totalRow = ['Total'];
      let grandTotal = 0;
      const statusTotals = {};
      statuses.forEach((status) => {
        statusTotals[status] = 0;
      });
      for (const subject in attendanceMap) {
        let subjectTotal = 0;
        statuses.forEach((status) => {
          const count = attendanceMap[subject][status] || 0;
          subjectTotal += count;
          statusTotals[status] += count;
        });
        grandTotal += subjectTotal;
      }
      totalRow.push(grandTotal);
      statuses.forEach((status) => {
        totalRow.push(statusTotals[status]);
      });
      tableRows.push(totalRow);

      // 5) Add the table to the document with styling for the Total row.
      coordinator.doc.text('Attendance', MARGIN_LEFT, coordinator.currentY);
      coordinator.currentY += 10;
      coordinator.addTable(tableColumns, tableRows, (dataCell) => {
        // Check if this row is the Total row.
        // This assumes the first cell (subject) is "Total" for the final row.
        if (dataCell.row.raw[0] === 'Total') {
          // Apply a light grey fill and bold font to differentiate the Total row.
          dataCell.cell.styles.fillColor = [230, 230, 230];
          dataCell.cell.styles.fontStyle = 'bold';
        }
      });
    }

    // ================================
    // ATTENDANCE SECTION
    // ================================
    coordinator.addSectionTitle('Attendance');

    const attendanceData = data.attendance_data?.attendance || [];

    if (attendanceData.length === 0) {
      coordinator.noDataMessage();
    } else {
      // Aggregate attendance data by subject and status
      const aggregatedData = attendanceData.reduce((acc, item) => {
        const { subject, user_status } = item;
        if (!acc[subject]) {
          acc[subject] = {};
        }
        acc[subject][user_status] = (acc[subject][user_status] || 0) + 1;
        return acc;
      }, {});

      // Gather all unique statuses
      const statuses = new Set();
      Object.values(aggregatedData).forEach(statusCounts => {
        Object.keys(statusCounts).forEach(status => statuses.add(status));
      });
      const statusesArray = Array.from(statuses); // e.g., ['Present', 'Absent', 'OnLeave']

      // Define colors for statuses
      const statusColors = {
        Present: 'rgba(0, 128, 0, 0.7)',
        Absent: 'rgba(255, 0, 0, 0.7)',
        OnLeave: 'rgba(255, 165, 0, 0.7)'
      };

      const subjects = Object.keys(aggregatedData);

      // Build datasets for the stacked chart
      const datasets = statusesArray.map(status => ({
        label: status,
        data: subjects.map(subject => aggregatedData[subject][status] || 0),
        backgroundColor: statusColors[status] || 'gray'
      }));

      // --- Optionally, add a table of the raw attendance data ---
      const columns = ['Date', 'Subject', 'Type', 'Status'];
      const rows = attendanceData.map((item) => [
        formatDate(item.date, false),
        item.subject,
        item.type,
        item.user_status,
      ]);
      // coordinator.addTable(columns, rows, (dataCell) => {
      //   if (dataCell.section === 'body' && dataCell.column.index === 3) {
      //     dataCell.cell.styles.textColor =
      //       dataCell.cell.raw === 'Present' ? [0, 128, 0] : [255, 0, 0];
      //   }
      // });

      // --- Generate and insert the stacked columns chart ---
      const attendanceStackedColumnsUrl = await createStackedColumnsChart(
        subjects,
        datasets,
        attendanceStackedColumnsChart.current
      );

      if (attendanceStackedColumnsUrl) {
        coordinator.ensureSpace(350);
        coordinator.doc.setFont('helvetica', 'bold');
        coordinator.doc.setFontSize(12);
        coordinator.doc.text('Attendance by Subject and Status', MARGIN_LEFT, coordinator.currentY);
        coordinator.currentY += 15;
        coordinator.doc.addImage(attendanceStackedColumnsUrl, 'PNG', MARGIN_LEFT, coordinator.currentY, 500, 300);
        coordinator.currentY += 320;
      }
      // 6. Create an aggregated summary table.
  // Define the table columns: "Subject", "Total", plus one column per unique status.
  const tableColumns = ['Subject', 'Total', ...statusesArray];
  const tableRows = [];

  // Build a row for each subject.
  subjects.forEach(subject => {
    let subjectTotal = 0;
    statusesArray.forEach(status => {
      subjectTotal += aggregatedData[subject][status] || 0;
    });
    const row = [subject, subjectTotal];
    statusesArray.forEach(status => {
      row.push(aggregatedData[subject][status] || 0);
    });
    tableRows.push(row);
  });

  // Compute the totals for each column across all subjects.
  const totalRow = ['Total'];
  let grandTotal = 0;
  const statusTotals = {};
  statusesArray.forEach(status => {
    statusTotals[status] = 0;
  });
  subjects.forEach(subject => {
    let subjectTotal = 0;
    statusesArray.forEach(status => {
      const count = aggregatedData[subject][status] || 0;
      subjectTotal += count;
      statusTotals[status] += count;
    });
    grandTotal += subjectTotal;
  });
  totalRow.push(grandTotal);
  statusesArray.forEach(status => {
    totalRow.push(statusTotals[status]);
  });
  tableRows.push(totalRow);

  // 7. Insert the summary table into the PDF.
  coordinator.doc.text('Attendance Summary', MARGIN_LEFT, coordinator.currentY);
  coordinator.currentY += 10;
  coordinator.addTable(tableColumns, tableRows, (dataCell) => {
    // Style the "Total" row with a different fill color and bold font.
    if (dataCell.row.raw[0] === 'Total') {
      dataCell.cell.styles.fillColor = [230, 230, 230];
      dataCell.cell.styles.fontStyle = 'bold';
    }
  });
    }


    coordinator.addSectionTitle('PTMs');

    const ptmsData = data.ptms_data?.ptms || [];
    const ptmsDatav1 = data.ptms_data || [];
    console.log(ptmsDatav1)
    console.log(ptmsData)
    if (ptmsData.length === 0) {
      coordinator.noDataMessage();
    } else {
      const columns = ['Name', 'PTM Date', 'Time', 'Recommended By', 'Purpose'];
      const rows = ptmsData.map((ptm) => [
        ptm.name,
        formatDate(ptm.scheduled_date, false),
        ptm.scheduled_time,
        ptm.recommended_by || '',
        ptm.purpose || ''
      ]);
      coordinator.addTable(columns, rows);
    }

    doc.save('Student_Report.pdf');
  };

  const filteredTests = Object.keys(data.tests_data).filter(testId => {
    const testDetails = data.tests_data[testId]?.details || {};
    return testDetails.user_status === 'Present'; // Only include tests where user_status is NOT 'Absent'
  });

  const testNames = filteredTests.map(testId => data.tests_data[testId]?.details?.test_name || 'N/A');
  const userMarksPercentage = filteredTests.map(testId => {
    const t = data.tests_data[testId]?.total || {};
    return (((t.user_marks || 0) / (t.max_marks || 1)) * 100).toFixed(2);
  });

  const averageMarksPercentage = filteredTests.map(testId => {
    const t = data.tests_data[testId]?.total || {};
    return ((t.average_marks || 0) / (t.max_marks || 1)) * 100;
  });

  const highestMarksPercentage = filteredTests.map(testId => {
    const t = data.tests_data[testId]?.total || {};
    return ((t.highest_marks || 0) / (t.max_marks || 1)) * 100;
  });
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={generatePDF}
          className="px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg hover:scale-105 transition">
          Generate Monthly Report
        </button>
        { }
        <div ref={barChartContainerRef} />
        <div ref={assignmentsPieChart}></div>
        <div ref={assignmentsStackedBarChart}></div>
        <div ref={attendanceStackedColumnsChart}></div>

        <div id="chart-container" ref={chartRef} style={{ width: "600px", height: "300px", background: "white", padding: "10px" }}>
          <LineChart
            testNames={testNames}
            userMarks={userMarksPercentage}
            averageMarks={averageMarksPercentage}
            highestMarks={highestMarksPercentage}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
