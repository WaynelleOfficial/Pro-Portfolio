// import express from "express";

// NAV BAR
function homePage(){
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    //ACCORDIAN
    const codingProj = document.getElementById('coding-proj');
    codingProj.addEventListener('click',(event) => {
        console.log(event);

    });

    // const accordianBox = document.querySelectorAll('.accordian-item');
    // accordianBox.forEach(item => {
    //     item.addEventListener('click', () => {
    //         document.querySelectorAll('.accordian-item').forEach(el => el.style.flex = '1');
    //         item.style.flex = '25';
    //     });
    // });

    const accordionItems = document.querySelectorAll('.accordian-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            // Reset all items
            accordionItems.forEach(el => {
                el.style.flex = '1'; // Reset flex size
                el.querySelector('.ac-it-grid').classList.add('hidden'); // Hide grid content
            });

            // Expand the clicked item and show its content
            item.style.flex = '25'; 
            item.querySelector('.ac-it-grid').classList.remove('hidden'); 
        });
    });

    document.querySelector("#coding-grid button").addEventListener('click',()=>{
        window.location.href = 'coding.html';
    })
    document.querySelector("#proj-grid button").addEventListener('click',()=>{
        window.location.href = 'proj-manage.html';
    })
    document.querySelector("#cert-item button").addEventListener('click',()=>{
        window.location.href = 'certificates.html';
    })



    function handleTimelineMouseEnter(event, itemId) {
        console.log(event);
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const timelineDeets = document.querySelector(`#${itemId} + .time-menu`);
        timelineDeets.style.left = `${mouseX + 160}px`; // Add some offset to the right
        timelineDeets.style.top = `${mouseY - 120}px`;  // Add some offset below
        timelineDeets.style.opacity = '1';
    }

    function handleTimelineMouseLeave(itemId) {
        const timelineDeets = document.querySelector(`#${itemId} + .time-menu`);
        timelineDeets.style.opacity = '0';
    }

    const items = ['item-20', 'item-21', 'item-22', 'item-23','item-24'];

    items.forEach(itemId => {
        document.getElementById(itemId).addEventListener('mouseenter', (event) => handleTimelineMouseEnter(event, itemId));
        document.getElementById(itemId).addEventListener('mouseleave', () => handleTimelineMouseLeave(itemId));
    });

    document.getElementById('contact-form').addEventListener('submit',function(event){
        event.preventDefault();
        document.querySelector('.side-two').innerHTML="<div class='GBmsg'><h2 class='specialText title'>Thank You!</h2> <p>you will hear back from me shortly!</p></div>";
        this.reset();
    });

    document.getElementById('no').addEventListener('change', (event)=>{
        console.log(event);
        document.querySelector('#contact-grid').style.flex = '1'; // Reset flex size
        document.querySelector('#contact-grid').classList.add('hidden'); // Hide grid content
        document.querySelector('#blank-grid').style.flex = '25'; 
        document.querySelector('#blank-grid').classList.remove('hidden');

    })

    const confettiBtn = document.getElementById('blank-grid');
    const confettiCanvas = document.getElementById('confetti-canvas');
    const ctx = confettiCanvas.getContext('2d');

    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const confettiCount = 300;
    const confetti = [];
    let animationId;
    let isAnimating = false;

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function initConfetti() {
        confetti.length = 0; // Clear existing confetti
        for (let i = 0; i < confettiCount; i++) {
            confetti.push({
                x: random(0, confettiCanvas.width),
                y: random(0, confettiCanvas.height) - confettiCanvas.height,
                r: random(2, 6),
                d: random(15, 25),
                color: `hsl(${random(0, 360)}, 100%, 50%)`,
                tilt: random(-10, 10),
                tiltAngleIncremental: random(0.05, 0.12),
                tiltAngle: 0
            });
        }
    }

    function drawConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confetti.forEach((c, i) => {
            c.tiltAngle += c.tiltAngleIncremental;
            c.y += (Math.cos(c.d) + 1 + c.r) / 2;
            c.x += Math.sin(c.d);

            ctx.beginPath();
            ctx.lineWidth = c.r;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt + c.r / 4, c.y);
            ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 4);
            ctx.stroke();

            if (c.y > confettiCanvas.height) {
                confetti[i] = {
                    x: random(0, confettiCanvas.width),
                    y: random(0, confettiCanvas.height) - confettiCanvas.height,
                    r: c.r,
                    d: c.d,
                    color: c.color,
                    tilt: c.tilt,
                    tiltAngleIncremental: c.tiltAngleIncremental,
                    tiltAngle: c.tiltAngle
                };
            }
        });
    }

    function updateConfetti() {
        drawConfetti();
        animationId = requestAnimationFrame(updateConfetti);
    }

    function toggleConfetti() {
        if (isAnimating) {
            cancelAnimationFrame(animationId);
            isAnimating = false; // Reset the animation state
            confettiCanvas.style.opacity = 0;
            setTimeout(() => {
                ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
                confettiCanvas.style.opacity = 1;
            }, 1500);
            confettiBtn.textContent = "Get Started";
        } else {
            initConfetti();
            updateConfetti();
            isAnimating = true;
            confettiCanvas.style.opacity = 1;
            confettiBtn.textContent = "Stop Confetti";
        }
    }
    
    
    // Add event listener to the button
    confettiBtn.addEventListener('click', toggleConfetti);

}

















function projectPages(){
    //top of the page button
    document.querySelector('.to-the-top button').addEventListener('click',()=>{
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth' // Smooth scrolling
        });
    })
    // Collapse all .c-extra elements
    document.getElementById('collapse').addEventListener('click', () => {
        document.querySelectorAll('.c-extra').forEach(element => {
            element.style.display = 'none';
            // Reset button text to "More Details"
            const button = element.previousElementSibling.querySelector('.deets');
            if (button) {
                button.textContent = 'More Details'; // Change button text back
                const cItem = element.closest('.code-proj');
                cItem.insertBefore(button.parentElement, element); // Move the button back to its original position
            }
        });
    });

    // Expand all .c-extra elements
    document.getElementById('expand').addEventListener('click', () => {
        document.querySelectorAll('.c-extra').forEach(element => {
            element.style.display = 'block';
            // Change button text to "Hide Details"
            const button = element.previousElementSibling.querySelector('.deets');
            if (button) {
                button.textContent = 'Hide Details'; // Change button text
                const cItem = element.closest('.code-proj');
                cItem.appendChild(button.parentElement); // Move the button to the bottom
            }
        });
    });
    

    document.querySelectorAll('.c-more').forEach(moreDiv => {
        const button = moreDiv.querySelector('.specialText'); // Get the button inside .c-more
    
        button.addEventListener('click', () => {
        // Find the closest parent that has .code-proj and then go back down to find the corresponding .c-extra
            const cItem = moreDiv.closest('.code-proj');
            const cExtra = cItem.querySelector('.c-extra');
    
            // Toggle the display of the corresponding .c-extra element
            if (cExtra.style.display === 'none' || cExtra.style.display === '') {
                cExtra.style.display = 'block'; // Show the extra details
                button.textContent = 'Hide Details'; // Change button text
                cItem.appendChild(moreDiv); // Move the .c-more div to the bottom
            } else {
                cExtra.style.display = 'none'; // Hide the extra details
                button.textContent = 'More Details'; // Change button text back
                cItem.insertBefore(moreDiv, cExtra); // Move the .c-more div back to its original position
            }
        });
        
    });
}

function feedbackPage(){
     //top of the page button
     document.querySelector('.to-the-top button').addEventListener('click',()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
        });})
}

function contactPage(){
     //top of the page button
     document.querySelector('.to-the-top button').addEventListener('click',()=>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
        });})
}













// function feedbackPage(){}

// function contactPage(){}





document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('home-page')) {
        homePage();
    } else if (document.body.classList.contains('coding-page'||'ux-ui-page')) {
        projectPages();
    }
    else if (document.body.classList.contains('contact-page')) {
        feedbackPage();
    }
    else if (document.body.classList.contains('feedback-page')) {
        contactPage();
    }
    
});


