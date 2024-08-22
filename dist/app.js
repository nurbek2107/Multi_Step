"use strict";
//===code to toggle between monthly and yearly plans====
const toggle = document.querySelector(".toggle");
const monthly = document.querySelector(".yearly_billing");
const yearly = document.querySelector(".monthly_billing");
const yearText = document.querySelector(".yearly");
const monthText = document.querySelector(".monthly");
// grab the go back button
const prev_btn = document.getElementById("prev");
// grab the confirm button
const submit_btn = document.querySelector(".submit_btn");
const arigato = document.querySelector(".arigato");
const confirm_page = document.querySelector(".confirm_page");
toggle.addEventListener("click", () => {
    if (yearly.classList.contains("none")) {
        yearly.classList.remove("none");
        monthly.classList.add("none");
    }
    else {
        yearly.classList.add("none");
        monthly.classList.remove("none");
    }
    if (monthText.classList.contains("heading-color")) {
        monthText.classList.remove("heading-color");
        monthText.classList.add("sub-color");
        yearText.classList.remove("sub-color");
        yearText.classList.add("heading-color");
    }
    else {
        monthText.classList.remove("sub-color");
        monthText.classList.add("heading-color");
        yearText.classList.remove("heading-color");
        yearText.classList.add("sub-color");
    }
});
//======== code to change sections ===========//
const btn_one = document.getElementById("personal-info");
const btn_two = document.getElementById("select-plans");
const btn_three = document.getElementById("add-ons");
const btn_four = document.getElementById("thanks");
// grab all the sections
const personal_info = document.getElementById("personal__info");
const add_ons = document.getElementById("add__ons");
const finishing_up = document.getElementById("finishing__up");
const thanks = document.getElementById("thanks__page");
const pick_addons = document.querySelector(".pick_addons");
btn_one.onclick = () => {
    if (personal_info.classList.contains("none")) {
        personal_info.classList.remove("none");
        add_ons.classList.add("none");
        thanks.classList.add("none");
        finishing_up.classList.add("none");
        btn_one.classList.add("blue-background");
        btn_two.classList.remove("blue-background");
        btn_three.classList.remove("blue-background");
        btn_four.classList.remove("blue-background");
        prev_btn.style.display = "none";
        next_page.style.display = "flex";
        submit_btn.style.display = "none";
        arigato.style.display = 'none';
        confirm_page.style.display = 'flex';
    }
};
btn_two.onclick = () => {
    if (add_ons.classList.contains("none")) {
        add_ons.classList.remove("none");
        personal_info.classList.add("none");
        thanks.classList.add("none");
        finishing_up.classList.add("none");
        btn_two.classList.add("blue-background");
        btn_one.classList.remove("blue-background");
        btn_three.classList.remove("blue-background");
        btn_four.classList.remove("blue-background");
        prev_btn.style.display = "flex";
        next_page.style.display = "flex";
        submit_btn.style.display = "none";
        arigato.style.display = 'none';
        confirm_page.style.display = 'flex';
    }
};
btn_three.onclick = () => {
    if (finishing_up.classList.contains("none")) {
        finishing_up.classList.remove("none");
        personal_info.classList.add("none");
        add_ons.classList.add("none");
        thanks.classList.add("none");
        btn_three.classList.add("blue-background");
        btn_one.classList.remove("blue-background");
        btn_two.classList.remove("blue-background");
        btn_four.classList.remove("blue-background");
        prev_btn.style.display = "flex";
        next_page.style.display = "flex";
        submit_btn.style.display = "none";
        arigato.style.display = 'none';
        confirm_page.style.display = 'flex';
    }
};
btn_four.onclick = () => {
    if (thanks.classList.contains("none")) {
        thanks.classList.remove("none");
        personal_info.classList.add("none");
        add_ons.classList.add("none");
        finishing_up.classList.add("none");
        btn_four.classList.add("blue-background");
        btn_one.classList.remove("blue-background");
        btn_two.classList.remove("blue-background");
        btn_three.classList.remove("blue-background");
        prev_btn.style.display = "flex";
        submit_btn.style.display = "none";
        next_page.style.display = "none";
        arigato.style.display = 'block';
        confirm_page.style.display = 'none';
    }
};
// === grab next page button =========//
const next_page = document.querySelector(".next");
next_page.addEventListener("click", () => {
    if (add_ons.classList.contains("none") &&
        finishing_up.classList.contains("none") &&
        thanks.classList.contains("none")) {
        personal_info.classList.add("none");
        add_ons.classList.remove("none");
        btn_one.classList.remove("blue-background");
        btn_two.classList.add("blue-background");
        submit_btn.style.display = "none";
        arigato.style.display = 'none';
        confirm_page.style.display = 'flex';
    }
    else if (personal_info.classList.contains("none") &&
        finishing_up.classList.contains("none") &&
        thanks.classList.contains("none")) {
        add_ons.classList.add("none");
        finishing_up.classList.remove("none");
        btn_two.classList.remove("blue-background");
        btn_three.classList.add("blue-background");
        submit_btn.style.display = "none";
        arigato.style.display = 'none';
        confirm_page.style.display = 'flex';
    }
    else {
        finishing_up.classList.add("none");
        thanks.classList.remove("none");
        btn_three.classList.remove("blue-background");
        btn_four.classList.add("blue-background");
        submit_btn.style.display = "none";
        next_page.style.display = "none";
        arigato.style.display = 'block';
        confirm_page.style.display = 'none';
    }
});
//=== add borders to the plans when clicked ======//
const plans = document.querySelectorAll(".plan");
plans.forEach((plan) => {
    plan.onclick = () => {
        plans.forEach((p) => p.classList.remove("border", "bg"));
        plan.classList.add("border", "bg");
    };
});
// ==== add borders to input when clicked =========
const inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {
    input.onclick = () => {
        inputs.forEach((i) => i.classList.remove("border"));
        input.classList.add("border");
        console.log("i");
    };
});
prev_btn.addEventListener("click", () => {
    if (personal_info.classList.contains("none") &&
        finishing_up.classList.contains("none") &&
        thanks.classList.contains("none")) {
        personal_info.classList.remove("none");
        add_ons.classList.add("none");
        btn_two.classList.remove("blue-background");
        btn_one.classList.add("blue-background");
        prev_btn.style.display = "none";
        submit_btn.style.display = "none";
    }
    else if (personal_info.classList.contains("none") &&
        add_ons.classList.contains("none") &&
        thanks.classList.contains("none")) {
        add_ons.classList.remove("none");
        finishing_up.classList.add("none");
        btn_three.classList.remove("blue-background");
        btn_two.classList.add("blue-background");
        next_page.style.display = "flex";
        submit_btn.style.display = "none";
    }
    else if (personal_info.classList.contains("none") &&
        add_ons.classList.contains("none") &&
        finishing_up.classList.contains("none")) {
        finishing_up.classList.remove("none");
        thanks.classList.add("none");
        btn_four.classList.remove("blue-background");
        btn_three.classList.add("blue-background");
        next_page.style.display = "flex";
        submit_btn.style.display = "none";
    }
});
next_page.onclick = () => {
    if (personal_info.classList.contains("none") &&
        finishing_up.classList.contains("none") &&
        thanks.classList.contains("none")) {
        prev_btn.style.display = "flex";
    }
    else if (personal_info.classList.contains("none") &&
        add_ons.classList.contains("none") &&
        thanks.classList.contains("none")) {
        prev_btn.style.display = "flex";
    }
    else if (personal_info.classList.contains("none") &&
        add_ons.classList.contains("none") &&
        finishing_up.classList.contains("none")) {
        prev_btn.style.display = "flex";
        next_page.classList.add("none");
    }
    else {
        prev_btn.style.display = "none";
    }
};
document.querySelectorAll(".dlc").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
        const checkboxElement = e.target;
        if (checkboxElement.checked) {
            console.log("checked");
            pick_addons.classList.remove("none");
        }
        else {
            pick_addons.classList.add("none");
        }
    });
});
