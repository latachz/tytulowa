import React, { useRef, useEffect } from "react";

const Canvas = ({ name, klasa }) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let logo = new Image();
		logo.src = "logo.png";

		canvas.width = 800;
		canvas.height = 500;

		ctx.fillStyle = "#ca4b4b";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		ctx.fillStyle = "#9c2b2b";
		ctx.fillRect(0, ctx.canvas.height - 100, ctx.canvas.width, 100);

		logo.onload = () => {
			ctx.drawImage(logo, 55, ctx.canvas.height - 150, 100, 100);
		};

		ctx.fillStyle = "#ffffff";

		ctx.font = "700 36px Montserrat";
		ctx.fillText("Zespół Szkół Komunikacji", 175, ctx.canvas.height - 110);

		ctx.font = "400 24px Montserrat";
		ctx.fillText(
			"im. Hipolita Cegielskiego w Poznaniu",
			175,
			ctx.canvas.height - 75
		);

		ctx.textAlign = "center";

		ctx.font = "700 48px Montserrat";
		ctx.fillText("Geografia", ctx.canvas.width / 2, 100);

		ctx.font = "700 32px Montserrat";
		ctx.fillText("Technikum Komunikacji", ctx.canvas.width / 2, 150);

		ctx.font = "400 42px Montserrat";
		ctx.fillText(name, ctx.canvas.width / 2, 250);

		ctx.font = "400 30px Montserrat";
		ctx.fillText(`Klasa ${klasa}`, ctx.canvas.width / 2, 285);
	}, [name, klasa]);

	return <canvas ref={canvasRef} />;
};

export default Canvas;
