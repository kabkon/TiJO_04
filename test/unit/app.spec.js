describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    describe('getDescendingNumbers', function () {
        it('should return false when argument is string', function () {
            expect(app.getDescendingNumbers("asd",'a')).toEqual(false);
        })
        it('should return false when argument is string', function () {
            expect(app.getDescendingNumbers(1,'a')).toEqual(false);
        })
        it('should return false when argument is string', function () {
            expect(app.getDescendingNumbers("asd",2)).toEqual(false);
        })
        it('should return false when numberTo is big nuberfrom', function (){
            expect(app.getDescendingNumbers(1,5)).toEqual(false);
        })
        it('should return false when numberTo is bigger than nuberFrom', function () {
            expect(app.getDescendingNumbers(1,3)).toEqual(false);
        })
    });
    describe('areaOfTrapezoid',function(){
        it('should return false when args a or b or h are lower then 0', function () {
            expect(app.areaOfTrapezoid(-1,2,2)).toEqual(false);
        });
        it('should return false when args a or b or h are lower then 0', function () {
            expect(app.areaOfTrapezoid(11,-2,2)).toEqual(false);
        });
        it('should return false when args a or b or h are lower then 0', function () {
            expect(app.areaOfTrapezoid(1,2,-2)).toEqual(false);
        });
        it('should return false when any of args is not a number', function () {
            expect(app.areaOfTrapezoid('a',2,3)).toEqual(false);
        });
        it('should return false when any of args is not a number', function () {
            expect(app.areaOfTrapezoid(-1,'sd',-3)).toEqual(false);
        });
        it('should return false when any of args is not a number', function () {
            expect(app.areaOfTrapezoid(-2,-2,'as')).toEqual(false);
        });
        it('should return areaOfTrapezoid ', function () {
            expect(app.areaOfTrapezoid(1,4,2)).toEqual(5);
        });
    });
    describe('maxArrey', function () {

        it('should return false when arg is null', function () {
            expect(app.maxArray()).toEqual(false);

        })
        it('should return false when contains element different then number', function () {
            expect(app.maxArray([1,2,3,2,'2'])).toEqual(false)
        });
        it('should return false when contains element different then number', function () {
            expect(app.maxArray([1,true,3,2,'2'])).toEqual(false)
        });
        it('should return false when contains element different then number', function () {
            expect(app.maxArray([1,true,undefined,2,'2'])).toEqual(false)
        });
        it('should return false when contains element different then number', function () {
            expect(app.maxArray([1,1,{},2,'2'])).toEqual(false);
        });

        it('shuld return function maxArray with  max elemnt', function () {
            expect(app.maxArray([2,1,22,2,1])).toEqual(22)
        });

    });
    describe('squareOdd', function () {
        it('should return false when args are null', function () {
            expect(app.squareOdd()).toEqual(false);
        });
        it('should return false when array contains elements different than number and string', function () {
            expect(app.squareOdd([1,2,34,5,'sad', true])).toEqual(false);
        });
        it('should return false when array contains elements different than number and string', function () {
            expect(app.squareOdd([1,2,undefined,5,'sa'])).toEqual(false);
        });
        it('should return false when array contains elements different than number and string', function () {
            expect(app.squareOdd([1,2,false,5,'sad', true])).toEqual(false);
        });
        it('should return function when elements are good', function () {
            expect(app.squareOdd([1,2,3,4])).toEqual([1,2,9,4]);
            expect(app.squareOdd([3,4,4,7])).toEqual([9,4,4,49]);

        })


    })




});