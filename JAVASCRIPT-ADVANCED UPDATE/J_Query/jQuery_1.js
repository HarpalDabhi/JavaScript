// jQuery Syntax

// $(Selcetror).action(){
//     Event
// }


// Using Tag Selector.
$('h1').click(function(e) {
    // console.log(e)
    alert("H1 is clicked")
});

// Using Id Selector.

$('#firstdiv').click(function() {
    alert("First div clicked")
});

// Using Class Selector.

$('.w3-black').hover(function() {
    $(this).hide();
});

jQuery('.w3-quarter').hover(function() {
    $(this).hide();
    console.log('This')
})

$('button').dblclick(function() {
    console.log('Clicked')
});

$('.w3-card-4').mouseenter(function() {
    console.log('Moun Entered');
});
$('.w3-card-4').mouseleave(function() {
    console.log('Moun Out');
});



$(document).ready(function() {

    $('#first_input').focus(function() {
        console.log('Focused')
    });
    $('#second_input').blur(function() {
        console.log('Blured')
    });

    $('.w3-radio').change(function(){
        console.log('changed');
        
    })

});

$(function(){
    $(window).load(function(){
        console.log('Harpal')
    })
})

$(function(){
    $('body').keypress(function(){
        console.log('Key Press')
    })
    $('body').keyup(function(){
        console.log('Key up')
    })
    $('body').keydown(function(){
        console.log('Key Down')
    })

    $(window).resize(function(){
        console.log('resides')
    })
})