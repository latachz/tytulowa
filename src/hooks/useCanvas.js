import { useEffect } from "react";

const useCanvas = (canvasRef, name, klasa) => {
	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		let logo = new Image();
		logo.src = "/tytulowa/logo.png";

		canvas.width = 800;
		canvas.height = 1000;

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

		ctx.font = "700 38px Montserrat";
		ctx.fillText("Działalność gospodarcza w branży", ctx.canvas.width / 2, 300);

		ctx.font = "400 38px Montserrat";
		ctx.fillText("\"Twój własny spichlerz\"", ctx.canvas.width / 2, 370);

		ctx.font = "400 42px Montserrat";
		ctx.fillText(name, ctx.canvas.width / 2, 460);

		ctx.font = "400 30px Montserrat";
		ctx.fillText(`Klasa ${klasa}`, ctx.canvas.width / 2, 500);

		ctx.font = "400 32px Montserrat";
		ctx.fillText("Technikum Komunikacji", ctx.canvas.width / 2, 600);

		const ratio =
			window.screen.availWidth > 800
				? 1
				: window.screen.availWidth / canvas.width / 1.05;

		canvas.style.width = canvas.width * ratio + "px";
		canvas.style.height = canvas.height * ratio + "px";
	}, [canvasRef, name, klasa]);
};

export default useCanvas;
