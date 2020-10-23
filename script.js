let userNameInput = document.querySelector(".start-con input");

const startBtn = document.querySelector(".start-con button");

if (startBtn != null) {
	startBtn.addEventListener("click", () => {
		let userName = userNameInput.value;
		localStorage.setItem("userName", userName);
		location.href = "quiz.html";
	});
}

const question = [
	{
		question: "full form of ram",
		ans: "random access memory",
		options: [
			"ready access memory",
			"ransom access memory",
			"reiny access memory",
			"random access memory",
		],
	},
	{
		question: "capital of india",
		ans: "new delhi",
		options: ["hyderabad", "kolkata", "mumbai", "new delhi"],
	},
	{
		question: "capital of odisha",
		ans: "bhubaneswar",
		options: ["cutack", "bhubaneswar", "bhadrak", "rourkela"],
	},
	{
		question: "capital of mine",
		ans: "bhubaneswar",
		options: ["cutack", "bhubaneswar", "bhadrak", "rourkela"],
	},
	{
		question: "capital of odisha",
		ans: "bhubaneswar",
		options: ["cutack", "bhubaneswar", "bhadrak", "rourkela"],
	},
];
const toggleActiveClass = () => {
	let li = document.querySelectorAll("li");

	li.forEach((element) => {
		element.addEventListener("click", () => {
			li.forEach((element) => {
				if (element.classList.contains("active")) {
					element.classList.remove("active");
				}
			});
			element.classList.add("active");
		});
	});
};

const showQuestion = () => {
	let html = "";
	const h3 = document.querySelector("#qstn-con h3");
	const ul = document.querySelector("#qstn-con ul");
	html = `<li>${question[0].options[0]}</li>
			<li>${question[0].options[1]}</li>
			<li>${question[0].options[2]}</li>
			<li>${question[0].options[3]}</li>
			`;
	if (h3 != null) {
		h3.innerHTML = question[0].question;
	}
	if (ul != null) {
		ul.innerHTML = html;
	}
	toggleActiveClass();
};
showQuestion();
const showResult = () => {
	const resCon = document.querySelector(".container");
	if (resCon != null) {
		resCon.style.display = "flex";
	}
	const user = document.querySelector(".container h3");
	const wrongAnswer = document.querySelector(".wrong-answer");
	const noAttempt = document.querySelector(".no-attempt");
	if (user != null) {
		user.innerHTML = `Hello ${localStorage.getItem("userName")}`;
	}
	const correctAnsDiv = document.querySelector(".container .ans");
	if (correctAnsDiv != null) {
		correctAnsDiv.innerHTML = `correct ans: ${localStorage.getItem("ans")}`;
	}
	if (wrongAnswer != null) {
		// let rightAns = parseInt(localStorage.getItem("ans"));
		wrongAnswer.innerHTML = `wrong ans: ${localStorage.getItem("wrongAns")}`;
	}
	if (noAttempt != null) {
		let noAtt =
			question.length -
			(parseInt(localStorage.getItem("ans")) +
				parseInt(localStorage.getItem("wrongAns")));
		noAttempt.innerHTML = `no attempt ${noAtt}`;
	}
};

const nextQuestion = (counter) => {
	if (counter == question.length) {
		const qstnCon = document.querySelector("#qstn-con");
		if (qstnCon != null) {
			qstnCon.style.display = "none";
			showResult();
			return;
		}
	}
	let html = "";
	const h3 = document.querySelector("#qstn-con h3");
	const ul = document.querySelector("#qstn-con ul");
	html = `<li>${question[counter].options[0]}</li>
			<li>${question[counter].options[1]}</li>
			<li>${question[counter].options[2]}</li>
			<li>${question[counter].options[3]}</li>
			`;
	if (h3 != null) {
		h3.innerHTML = question[counter].question;
	}
	if (ul != null) {
		ul.innerHTML = html;
	}
};
const nextBtn = document.querySelector("#qstn-con button");
if (nextBtn != null) {
	let counter = 1;
	let ansCouter = 0;
	let correctAns = 0;
	let wrongAns = 0;
	let result = JSON.parse(localStorage.getItem("result"));
	// if (result == null) {
	// 	var resArr = [];
	// }

	nextBtn.addEventListener("click", () => {
		let ans = document.querySelector("li.active");
		console.log(ans);
		if (ans != null) {
			if (question[ansCouter].ans == ans.innerHTML) {
				correctAns++;
			}
			if (question[ansCouter].ans != ans.innerHTML && ans.innerHTML != null) {
				wrongAns++;
			}
		}
		ansCouter++;
		localStorage.setItem("ans", correctAns);
		localStorage.setItem("wrongAns", wrongAns);

		// resArr.push(correctAns);
		// resArr.push(wrongAns);

		nextQuestion(counter);
		counter++;
		toggleActiveClass();
	});
	// localStorage.setItem("result", JSON.stringify(resArr));
}
