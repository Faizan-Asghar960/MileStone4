"use strict";
// Ensure jsPDF is available globally from the UMD library
const { jsPDF } = window.jspdf;
// Function to generate PDF
const generatePDF = () => {
    // Create a new jsPDF instance
    const doc = new jsPDF();
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const description = document.getElementById("description").value;
    // Add text to the PDF
    doc.text("Resume", 10, 10);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Phone: ${phone}`, 10, 40);
    doc.text(`Education: ${education}`, 10, 50);
    doc.text(`Experience: ${experience}`, 10, 60);
    doc.text(`Skills: ${skills}`, 10, 70);
    doc.text(`Description: ${description}`, 10, 80);
    // Save the PDF
    doc.save("resume.pdf");
};
// Add event listener to the "Generate PDF" button
const pdfButton = document.getElementById("generatePDF");
if (pdfButton) {
    pdfButton.addEventListener("click", generatePDF);
}
else {
    console.error("Generate PDF button not found!");
}
