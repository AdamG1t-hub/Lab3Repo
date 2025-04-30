$(document).ready(function(){
    $('.header').height($(window).height());
    })

//Contact Highlight
$(document).ready(function () {
    $('.nav-link[href="#contact"]').on('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const contactSection = $('#contact');

        // Scroll to the contact section
        contactSection[0].scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Add a highlight effect and border flash
        contactSection.css({
            'transition': 'background-color 1s ease, box-shadow 1s ease',
            'background-color': 'rgb(165, 251, 165)', // Bright green highlight
            'box-shadow': '0 0 15px 5px rgb(165, 251, 165)' // Glowing green border
        });

        // Remove the highlight and border flash after 2 seconds
        setTimeout(() => {
            contactSection.css({
                'background-color': 'transparent', // Reset background
                'box-shadow': 'none' // Reset border
            });
        }, 1000); // Effect lasts for 2 seconds
    });
});