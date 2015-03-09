window.onload = function() {
	buttonCalculate = document.getElementById("calculate");
	buttonCalculate.onclick = function() {
        var item1 = document.getElementsByName("selector")[0].options[document.getElementsByName("selector")[0].selectedIndex].value
        var item2 = document.getElementsByName("selector")[1].options[document.getElementsByName("selector")[1].selectedIndex].value
		var longitud = new Longitud(document.getElementById("valor"),item1,item2);
        document.getElementById("ResultText").value = longitud.calculate();
		document.getElementsByClassName("units")[0].innerHTML = item2;
		
	};
};
function Longitud(values,firstUnit,secondUnit) {
    this.values = values;
    this.firstUnit = typeof firstUnit !== 'undefined' ? firstUnit : "";
    this.secondUnit = typeof secondUnit !== 'undefined' ? secondUnit : "";

};
 Longitud.prototype = {
        isNumeric: function( n ) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        },
        calculate: function() {
            if (this.isNumeric(this.values.value)) {
               this.values = this.values.value 
               var firstValue = 1;
               var secondValue = 1;

               switch(this.firstUnit){
                    case "m":
                        firstValue = 1 ;
                        break;
                     case "cm":
                        firstValue = 1/100 ;
                        break;
                     case "mm":
                        firstValue = 1/1000 ;
                        break;
               };
               switch(this.secondUnit){
                    case "m":
                        secondValue = 1 ;
                        break;
                     case "cm":
                        secondValue = 100 ;
                        break;
                     case "mm":
                        secondValue = 1000 ;
                        break;
               };
               return this.values*firstValue*secondValue
            }else{
                alert("please enter a number");
                this.values = null;
            };
        },
        setFirstUnit: function (value){
            this.firstUnit = value;
        },
        setSecondUnit: function (value){
            this.secondUnit = value;
        }

    };
