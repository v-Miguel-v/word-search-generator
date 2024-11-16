// Requeriments and Initializations
"use strict";
import { BLANK_PDF } from "https://cdn.jsdelivr.net/npm/@pdfme/common@5.2.3/+esm"; // Common
import { text, line, rectangle, table } from "https://cdn.jsdelivr.net/npm/@pdfme/schemas@5.2.3/+esm"; // Schemas
import { generate } from "https://cdn.jsdelivr.net/npm/@pdfme/generator@5.2.3/+esm"; // Generator
import { Designer } from "https://cdn.jsdelivr.net/npm/@pdfme/ui@5.2.3/+esm"; // UI

// Template and Schemas
const template = {
	basePdf: BLANK_PDF,
	schemas: [[
		{
			name: "textBox1",
			type: "text",
			position: {
			  x: 30,
			  y: 30
			},
			width: 300,
			height: 30,
			fontSize: 36
		},

		{
			name: "textBox2",
			type: "text",
			position: {
			  x: 30,
			  y: 120
			},
			width: 300,
			height: 30,
			fontSize: 36
		}
	 ]]
};

// Inputs for Schemas
const inputs = [{ textBox1: "text box 1 content", textBox2: "text box 2 content" }];

// Generation
generate({ template, inputs }).then((pdf) => {
  console.log(pdf);
  const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
  window.open(URL.createObjectURL(blob));
});