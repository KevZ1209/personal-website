let sliderVal = 5;

function checkAnswers() {
    let q1 = document.querySelector("#name").value.toLowerCase() === "kevin zhang";
    let q2 = document.querySelector("#email").value.toLowerCase() === "kevinz21@g.ucla.edu";
    let q3 = document.querySelector("#company2").checked === true;
    let q4 = document.querySelector("#opt2").checked === true;
    let q5 = (sliderVal === '4');

    const answers_arr = [q1, q2, q3, q4, q5]

    if (q1 && q2 && q3 && q4 && q5) {
        document.querySelector("#quiz-status").innerHTML = "Your Score: 5/5! Congrats! You officially know everything about me!"
    }
    else {
        let quiz_score = answers_arr.reduce((acc, curr_val) => acc + curr_val, 0);
        document.querySelector("#quiz-status").innerHTML = "Your Score: " + quiz_score + "/5";
    }

}

function updateSliderVal() {
    sliderVal = document.querySelector("#numhackathons").value
    document.querySelector("#numhackathons-value").innerHTML = sliderVal
}

document.querySelector("#submit-button").addEventListener("click", (e) => { e.preventDefault(); checkAnswers() })
document.querySelector("#numhackathons").addEventListener("change", updateSliderVal);