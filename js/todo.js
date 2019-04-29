$(function () {

    var $feladatok = $('#feladatok');
    var $feladat = $('#feladat');
    var $importance = $('#importance');
    var $urgency = $('#urgency');

    function feladatHozzaadas(feladat) {
        $feladatok.append('<li>Feladat: ' + feladat.feladat +
                    ', jelentőség: ' + feladat.importance +
                    ', státusz: ' + feladat.urgency + '</li>');
    }

    $.ajax({
        type: 'GET',
        url: 'backend.json',
        success: function (feladatok) {
            console.log('success', feladatok);
            $.each(feladatok, function (i, teendo) {
                feladatHozzaadas(teendo);
            });
        },
        error: function() {
            alert('Hiba történt az adatok betöltésénél!');
        }
    });

    $('#add').on('click', function() {

        var teendo = {
            feladat: $feladat.val(),
            importance: $importance.val(),
            urgency: $urgency.val()
        };

        $.ajax({
            type: 'POST',
            url: 'backend.json',
            data: teendo,
            success: function(ujTeendo) {
                feladatHozzaadas(ujTeendo);
            },
            error: function() {
                alert('Hiba történt az adatok mentésénél!');
            }
        });
        
    });

});