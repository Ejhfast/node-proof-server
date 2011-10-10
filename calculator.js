/* Jison generated parser */
var calculator = (function(){

var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"e":4,"EOF":5,"=>":6,"<=>":7,"-->":8,"->":9,"-*>":10,"&":11,"&&":12,"|":13,"||":14,"=":15,"+":16,"-":17,"*":18,"/":19,"^":20,"!":21,"NOT":22,"%":23,"(":24,")":25,"[":26,"]":27,":=":28,"NUMBER":29,"VAR":30,"E":31,"PI":32,"NOTHING":33,":":34,",":35,".":36,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"=>",7:"<=>",8:"-->",9:"->",10:"-*>",11:"&",12:"&&",13:"|",14:"||",15:"=",16:"+",17:"-",18:"*",19:"/",20:"^",21:"!",22:"NOT",23:"%",24:"(",25:")",26:"[",27:"]",28:":=",29:"NUMBER",30:"VAR",31:"E",32:"PI",33:"NOTHING",34:":",35:",",36:"."},
productions_: [0,[3,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,2],[4,2],[4,3],[4,3],[4,3],[4,1],[4,1],[4,1],[4,1],[4,1],[4,3],[4,4],[4,3],[4,3]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: typeof console !== 'undefined' ? console.log($$[$0-1]) : print($$[$0-1]);
          return $$[$0-1]; 
break;
case 2:this.$ = "(=> "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 3:this.$ = "(<=> "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 4:this.$ = "(implies "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 5:this.$ = "(-> "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 6:this.$ = "(-*> "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 7:this.$ = "(_and "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 8:this.$ = "(and "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 9:this.$ = "(_or "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 10:this.$ = "(or "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 11:this.$ = "(= "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 12:this.$ = "(+ "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 13:this.$ = "(- "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 14:this.$ = "(* "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 15:this.$ = "(/ "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 16:this.$ = "(pow "+$$[$0-2]+ " "+ $$[$0] +")";
break;
case 17:
          this.$ = "(factorial "+ $$[$0-1] +")";
        
break;
case 18:this.$ = "(~ "+ $$[$0] +")";
break;
case 19:this.$ = "(/ "+$$[$0-1]+ " 100)";
break;
case 20:this.$ = "(neg "+ $$[$0-1] + " )";
break;
case 21:this.$ = $$[$0-1];
break;
case 22:this.$ = '('+$$[$0-1]+')';
break;
case 23:this.$ = '('+$$[$0-2]+' '+$$[$0]+')';
break;
case 24:this.$ = Number(yytext);
break;
case 25:this.$ = String(yytext);
break;
case 26:this.$ = Math.E;
break;
case 27:this.$ = Math.PI;
break;
case 28:this.$ = "";
break;
case 29:this.$ = "("+$$[$0-2]+" "+$$[$0]+")";
break;
case 30:this.$ = "("+$$[$0-3]+" "+$$[$0-1]+")";
break;
case 31:this.$ = $$[$0-2]+" "+$$[$0];
break;
case 32:this.$ = $$[$0-2]+" "+$$[$0];
break;
}
},
table: [{3:1,4:2,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{1:[3]},{5:[1,12],6:[1,13],7:[1,14],8:[1,15],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],28:[1,30],35:[1,31],36:[1,32]},{4:33,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:34,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:35,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:36,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{5:[2,24],6:[2,24],7:[2,24],8:[2,24],9:[2,24],10:[2,24],11:[2,24],12:[2,24],13:[2,24],14:[2,24],15:[2,24],16:[2,24],17:[2,24],18:[2,24],19:[2,24],20:[2,24],21:[2,24],23:[2,24],25:[2,24],27:[2,24],28:[2,24],35:[2,24],36:[2,24]},{5:[2,25],6:[2,25],7:[2,25],8:[2,25],9:[2,25],10:[2,25],11:[2,25],12:[2,25],13:[2,25],14:[2,25],15:[2,25],16:[2,25],17:[2,25],18:[2,25],19:[2,25],20:[2,25],21:[2,25],23:[2,25],24:[1,38],25:[2,25],27:[2,25],28:[2,25],34:[1,37],35:[2,25],36:[2,25]},{5:[2,26],6:[2,26],7:[2,26],8:[2,26],9:[2,26],10:[2,26],11:[2,26],12:[2,26],13:[2,26],14:[2,26],15:[2,26],16:[2,26],17:[2,26],18:[2,26],19:[2,26],20:[2,26],21:[2,26],23:[2,26],25:[2,26],27:[2,26],28:[2,26],35:[2,26],36:[2,26]},{5:[2,27],6:[2,27],7:[2,27],8:[2,27],9:[2,27],10:[2,27],11:[2,27],12:[2,27],13:[2,27],14:[2,27],15:[2,27],16:[2,27],17:[2,27],18:[2,27],19:[2,27],20:[2,27],21:[2,27],23:[2,27],25:[2,27],27:[2,27],28:[2,27],35:[2,27],36:[2,27]},{5:[2,28],6:[2,28],7:[2,28],8:[2,28],9:[2,28],10:[2,28],11:[2,28],12:[2,28],13:[2,28],14:[2,28],15:[2,28],16:[2,28],17:[2,28],18:[2,28],19:[2,28],20:[2,28],21:[2,28],23:[2,28],25:[2,28],27:[2,28],28:[2,28],35:[2,28],36:[2,28]},{1:[2,1]},{4:39,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:40,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:41,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:42,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:43,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:44,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:45,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:46,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:47,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:48,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:49,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:50,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:51,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:52,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:53,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{5:[2,17],6:[2,17],7:[2,17],8:[2,17],9:[2,17],10:[2,17],11:[2,17],12:[2,17],13:[2,17],14:[2,17],15:[2,17],16:[2,17],17:[2,17],18:[2,17],19:[2,17],20:[2,17],21:[2,17],23:[2,17],25:[2,17],27:[2,17],28:[2,17],35:[2,17],36:[2,17]},{5:[2,19],6:[2,19],7:[2,19],8:[2,19],9:[2,19],10:[2,19],11:[2,19],12:[2,19],13:[2,19],14:[2,19],15:[2,19],16:[2,19],17:[2,19],18:[2,19],19:[2,19],20:[2,19],21:[2,19],23:[2,19],25:[2,19],27:[2,19],28:[2,19],35:[2,19],36:[2,19]},{4:54,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:55,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:56,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{5:[2,18],6:[2,18],7:[2,18],8:[2,18],9:[2,18],10:[2,18],11:[2,18],12:[2,18],13:[2,18],14:[2,18],15:[2,18],16:[2,18],17:[2,18],18:[2,18],19:[2,18],20:[2,18],21:[2,18],23:[2,18],25:[2,18],27:[2,18],28:[2,18],35:[2,18],36:[1,32]},{5:[2,20],6:[2,20],7:[2,20],8:[2,20],9:[2,20],10:[2,20],11:[2,20],12:[2,20],13:[2,20],14:[2,20],15:[2,20],16:[2,20],17:[2,20],18:[2,20],19:[2,20],20:[2,20],21:[2,20],23:[2,20],25:[2,20],27:[2,20],28:[1,30],35:[2,20],36:[1,32]},{6:[1,13],7:[1,14],8:[1,15],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[1,57],28:[1,30],35:[1,31],36:[1,32]},{6:[1,13],7:[1,14],8:[1,15],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],27:[1,58],28:[1,30],35:[1,31],36:[1,32]},{4:59,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{4:60,17:[1,4],22:[1,3],24:[1,5],26:[1,6],29:[1,7],30:[1,8],31:[1,9],32:[1,10],33:[1,11]},{5:[2,2],6:[2,2],7:[2,2],8:[2,2],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,2],27:[2,2],28:[1,30],35:[2,2],36:[1,32]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,3],27:[2,3],28:[1,30],35:[2,3],36:[1,32]},{5:[2,4],6:[1,13],7:[1,14],8:[2,4],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,4],27:[2,4],28:[1,30],35:[2,4],36:[1,32]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,5],27:[2,5],28:[1,30],35:[2,5],36:[1,32]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,6],27:[2,6],28:[1,30],35:[2,6],36:[1,32]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[1,16],10:[1,17],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,7],27:[2,7],28:[1,30],35:[2,7],36:[1,32]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[1,16],10:[1,17],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,8],27:[2,8],28:[1,30],35:[2,8],36:[1,32]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[1,16],10:[1,17],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,9],27:[2,9],28:[1,30],35:[2,9],36:[1,32]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[1,16],10:[1,17],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,10],27:[2,10],28:[1,30],35:[2,10],36:[1,32]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,11],27:[2,11],28:[1,30],35:[2,11],36:[1,32]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],17:[2,12],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,12],27:[2,12],28:[1,30],35:[2,12],36:[1,32]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],17:[2,13],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,13],27:[2,13],28:[1,30],35:[2,13],36:[1,32]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],17:[2,14],18:[2,14],19:[2,14],20:[1,27],21:[1,28],23:[1,29],25:[2,14],27:[2,14],28:[1,30],35:[2,14],36:[1,32]},{5:[2,15],6:[2,15],7:[2,15],8:[2,15],9:[2,15],10:[2,15],11:[2,15],12:[2,15],13:[2,15],14:[2,15],15:[2,15],16:[2,15],17:[2,15],18:[2,15],19:[2,15],20:[1,27],21:[1,28],23:[1,29],25:[2,15],27:[2,15],28:[1,30],35:[2,15],36:[1,32]},{5:[2,16],6:[2,16],7:[2,16],8:[2,16],9:[2,16],10:[2,16],11:[2,16],12:[2,16],13:[2,16],14:[2,16],15:[2,16],16:[2,16],17:[2,16],18:[2,16],19:[2,16],20:[2,16],21:[1,28],23:[1,29],25:[2,16],27:[2,16],28:[1,30],35:[2,16],36:[1,32]},{5:[2,23],6:[2,23],7:[2,23],8:[2,23],9:[2,23],10:[2,23],11:[2,23],12:[2,23],13:[2,23],14:[2,23],15:[2,23],16:[2,23],17:[2,23],18:[2,23],19:[2,23],20:[2,23],21:[2,23],23:[2,23],25:[2,23],27:[2,23],28:[2,23],35:[2,23],36:[1,32]},{5:[2,31],6:[1,13],7:[1,14],8:[1,15],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,31],27:[2,31],28:[1,30],35:[1,31],36:[1,32]},{5:[2,32],6:[2,32],7:[2,32],8:[2,32],9:[2,32],10:[2,32],11:[2,32],12:[2,32],13:[2,32],14:[2,32],15:[2,32],16:[2,32],17:[2,32],18:[2,32],19:[2,32],20:[2,32],21:[2,32],23:[2,32],25:[2,32],27:[2,32],28:[2,32],35:[2,32],36:[2,32]},{5:[2,21],6:[2,21],7:[2,21],8:[2,21],9:[2,21],10:[2,21],11:[2,21],12:[2,21],13:[2,21],14:[2,21],15:[2,21],16:[2,21],17:[2,21],18:[2,21],19:[2,21],20:[2,21],21:[2,21],23:[2,21],25:[2,21],27:[2,21],28:[2,21],35:[2,21],36:[2,21]},{5:[2,22],6:[2,22],7:[2,22],8:[2,22],9:[2,22],10:[2,22],11:[2,22],12:[2,22],13:[2,22],14:[2,22],15:[2,22],16:[2,22],17:[2,22],18:[2,22],19:[2,22],20:[2,22],21:[2,22],23:[2,22],25:[2,22],27:[2,22],28:[2,22],35:[2,22],36:[2,22]},{5:[2,29],6:[1,13],7:[1,14],8:[1,15],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[2,29],27:[2,29],28:[1,30],35:[1,31],36:[1,32]},{6:[1,13],7:[1,14],8:[1,15],9:[1,16],10:[1,17],11:[1,18],12:[1,19],13:[1,20],14:[1,21],15:[1,22],16:[1,23],17:[1,24],18:[1,25],19:[1,26],20:[1,27],21:[1,28],23:[1,29],25:[1,61],28:[1,30],35:[1,31],36:[1,32]},{5:[2,30],6:[2,30],7:[2,30],8:[2,30],9:[2,30],10:[2,30],11:[2,30],12:[2,30],13:[2,30],14:[2,30],15:[2,30],16:[2,30],17:[2,30],18:[2,30],19:[2,30],20:[2,30],21:[2,30],23:[2,30],25:[2,30],27:[2,30],28:[2,30],35:[2,30],36:[2,30]}],
defaultActions: {12:[2,1]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this,
        stack = [0],
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    //this.reductionCount = this.shiftCount = 0;

    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == 'undefined')
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);

    if (typeof this.yy.parseError === 'function')
        this.parseError = this.yy.parseError;

    function popStack (n) {
        stack.length = stack.length - 2*n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

    function lex() {
        var token;
        token = self.lexer.lex() || 1; // $end = 1
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    };

    var symbol, preErrorSymbol, state, action, a, r, yyval={},p,len,newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length-1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {

            if (!recovering) {
                // Report error
                expected = [];
                for (p in table[state]) if (this.terminals_[p] && p > 2) {
                    expected.push("'"+this.terminals_[p]+"'");
                }
                var errStr = '';
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+this.lexer.showPosition()+'\nExpecting '+expected.join(', ');
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == 1 /*EOF*/ ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr,
                    {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol == EOF) {
                    throw new Error(errStr || 'Parsing halted.');
                }

                // discard current lookahead and grab another
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            while (1) {
                // check for error recovery rule in this state
                if ((TERROR.toString()) in table[state]) {
                    break;
                }
                if (state == 0) {
                    throw new Error(errStr || 'Parsing halted.');
                }
                popStack(1);
                state = stack[stack.length-1];
            }

            preErrorSymbol = symbol; // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {

            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(this.lexer.yytext);
                lstack.push(this.lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = this.lexer.yyleng;
                    yytext = this.lexer.yytext;
                    yylineno = this.lexer.yylineno;
                    yyloc = this.lexer.yylloc;
                    if (recovering > 0)
                        recovering--;
                } else { // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2: // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3: // accept
                return true;
        }

    }

    return true;
}};/* Jison generated lexer */
var lexer = (function(){

var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            match = this._input.match(this.rules[rules[i]]);
            if (match) {
                lines = match[0].match(/\n.*/g);
                if (lines) this.yylineno += lines.length;
                this.yylloc = {first_line: this.yylloc.last_line,
                               last_line: this.yylineno+1,
                               first_column: this.yylloc.last_column,
                               last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
                this.yytext += match[0];
                this.match += match[0];
                this.matches = match;
                this.yyleng = this.yytext.length;
                this._more = false;
                this._input = this._input.slice(match[0].length);
                this.matched += match[0];
                token = this.performAction.call(this, this.yy, this, rules[i],this.conditionStack[this.conditionStack.length-1]);
                if (token) return token;
                else return;
            }
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    }});
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 33
break;
case 2:return 29
break;
case 3:return 30
break;
case 4:return 22
break;
case 5:return 12
break;
case 6:return 11
break;
case 7:return 14
break;
case 8:return 13
break;
case 9:return 28
break;
case 10:return 6
break;
case 11:return 7
break;
case 12:return 8
break;
case 13:return 9
break;
case 14:return 10
break;
case 15:return 15
break;
case 16:return 18
break;
case 17:return 19
break;
case 18:return 17
break;
case 19:return 16
break;
case 20:return 20
break;
case 21:return 21
break;
case 22:return 23
break;
case 23:return 24
break;
case 24:return 25
break;
case 25:return 32
break;
case 26:return 31
break;
case 27:return 34
break;
case 28:return 26
break;
case 29:return 27
break;
case 30:return 35
break;
case 31:return 36
break;
case 32:return 5
break;
case 33:return 'INVALID'
break;
}
};
lexer.rules = [/^\s+/,/^NULL\b/,/^[0-9]+(\.[0-9]+)?\b/,/^[a-zA-Z0-9]+/,/^~/,/^&&/,/^&/,/^\|\|/,/^\|/,/^:=/,/^=>/,/^<=>/,/^-->/,/^->/,/^-\*>/,/^=/,/^\*/,/^\//,/^-/,/^\+/,/^\^/,/^!/,/^%/,/^\(/,/^\)/,/^PI\b/,/^E\b/,/^:/,/^\[/,/^\]/,/^,/,/^\./,/^$/,/^./];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],"inclusive":true}};return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = calculator;
exports.parse = function () { return calculator.parse.apply(calculator, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}