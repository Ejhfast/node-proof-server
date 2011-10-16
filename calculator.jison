
/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
"NULL"                return 'NOTHING'
"ruleset"             return 'RULESET'
"endset"              return 'END'
\"(\\.|[^\"])*\"      return 'STRING'
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
[a-zA-Z0-9]+          return 'VAR'
"~"                   return 'NOT'
"&&"                  return '&&'
"&"                   return '&'
"||"                  return '||'
"|"                   return '|'
":="                  return ':='
"=>"                  return '=>'
"<=>"                 return '<=>'
"-->"                 return '-->'
"->"                  return '->'
"-*>"                 return '-*>'
"="                   return '='
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"("                   return '('
")"                   return ')'
"PI"                  return 'PI'
"E"                   return 'E'
"::"                  return '::'
":"                   return ':'
"["                   return '['
"]"                   return ']'
","                   return ','
"."                   return '.'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%right ','
%left VAR
%left '-->'
%left '=>','<=>'
%left '&', '|', '&&', '||'
%left '->','-*>'
%left '='
%left '+' '-'
%left '*' '/'
%left '^'
%right '!'
%right '%'
%left UMINUS
%left ':='
%left NOT
%left '.'

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { typeof console !== 'undefined' ? console.log($1) : print($1);
          return $1; }
    ;

e
    : RULESET VAR STRING e END
       {$$ = $4;}
    | e '=>' e
        {$$ = "(=> "+$1+ " "+ $3 +")";}
    | e '<=>' e
        {$$ = "(<=> "+$1+ " "+ $3 +")";}
    | e '-->' e
        {$$ = "(implies "+$1+ " "+ $3 +")";}
    | e '->' e
        {$$ = "(-> "+$1+ " "+ $3 +")";}
    | e '-*>' e
        {$$ = "(-*> "+$1+ " "+ $3 +")";}
    | e '&' e
        {$$ = "(_and "+$1+ " "+ $3 +")";}
    | e '&&' e
        {$$ = "(and "+$1+ " "+ $3 +")";}
    | e '|' e
        {$$ = "(_or "+$1+ " "+ $3 +")";}
    | e '||' e
        {$$ = "(or "+$1+ " "+ $3 +")";}
    | e '=' e
        {$$ = "(= "+$1+ " "+ $3 +")";}
    | e '+' e
        {$$ = "(+ "+$1+ " "+ $3 +")";}
    | e '-' e
        {$$ = "(- "+$1+ " "+ $3 +")";}
    | e '*' e
        {$$ = "(* "+$1+ " "+ $3 +")";}
    | e '/' e
        {$$ = "(/ "+$1+ " "+ $3 +")";}
    | e '^' e
        {$$ = "(pow "+$1+ " "+ $3 +")";}
    | e '!'
        {{
          $$ = "(factorial "+ $1 +")";
        }}
    | NOT e
        {$$ = "(~ "+ $2 +")";}
    | e '%'
        {$$ = "(/ "+$1+ " 100)";}
    | '-' e %prec UMINUS
        {$$ = "(neg "+ $1 + " )";}
    | '(' e ')'
        {$$ = $2;}
    | '[' e ']'
        {$$ = '('+$2+')';}
    | e ':=' e
        {$$ = '('+$1+' '+$3+')';}
    | NUMBER
        {$$ = Number(yytext);}
    | STRING
        {$$ = String(yytext);}
    | VAR
        {$$ = String(yytext);}
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
    | NOTHING
        {$$ = "";}
    | VAR ':' e
        {$$ = "("+$1+" "+$3+")";}
    | VAR '::' e %prec ','
        {$$ = "("+$1+" "+$3+")";}
    | VAR '(' e ')'
        {$$ = "("+$1+" "+$3+")";}
    | e ',' e
        {$$ = $1+" "+$3;}
    | e '.' e
        {$$ = $1+" "+$3;}
    ;

