function Write(x) {
    document.write(x)
}
function WriteB(x) {
    document.write("<b>"+x+"</b>")
}
function WriteI(x) {
    document.write("<i>"+x+"</i>")
}
function WriteBI(x) {
    document.write("<b><i>"+x+"</i></b>")
}
function WriteBR(x) {
    document.write(x+"</br>")
}
function br() {
    if (arguments[0]) {
        x = arguments[0]
    }else{
        x = 1
    }
    for (let i = 0; i < x; i++) {
        document.write("<br>")       
    }
}
function WriteH(x) {
    if (arguments[1]) {
        y = arguments[1]
    }else{
        y = 1
    }
    Write("<h")
    Write(y)
    Write(">")
    Write(x)
    Write("</h")
    Write(y)
    Write(">")
}
function WriteColor(x, color) {
    document.write("<span style='color: "+ color +";'>"+ x +"</span>")
}
Calendar = {
    object: new Date(),
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    get: function() {
        x = new Date()
        month = this.months[x.getMonth()]
        if (x.getSeconds() <= 9) {
            s = "0" + x.getSeconds()
        }else{
            s = x.getSeconds()
        }
        if (x.getMinutes() <= 9) {
            m = "0" + x.getMinutes()
        }else{
            m = x.getMinutes()
        }
        if (x.getHours() <= 9) {
            h = "0" + x.getHours()
        }else{
            h = x.getHours()
        }
        y = x.getDate() + " " + month + " " + x.getFullYear() + " | " + h + ":" + m + ":" + s
        return y;
    },
    getN: function() {
        x = new Date()
        month = x.getMonth() + 1
        if (month <= 9) {
            month = "0" + month
        }
        if (x.getSeconds() <= 9) {
            s = "0" + x.getSeconds()
        }else{
            s = x.getSeconds()
        }
        if (x.getMinutes() <= 9) {
            m = "0" + x.getMinutes()
        }else{
            m = x.getMinutes()
        }
        if (x.getHours() <= 9) {
            h = "0" + x.getHours()
        }else{
            h = x.getHours()
        }
        y = x.getDate() + "." + month + "." + x.getFullYear() + " | " + h + ":" + m + ":" + s
        return y;
    },
    getTime: function() {
        x = new Date()
        month = x.getMonth() + 1
        if (month <= 9) {
            month = "0" + month
        }
        if (x.getSeconds() <= 9) {
            s = "0" + x.getSeconds()
        }else{
            s = x.getSeconds()
        }
        if (x.getMinutes() <= 9) {
            m = "0" + x.getMinutes()
        }else{
            m = x.getMinutes()
        }
        if (x.getHours() <= 9) {
            h = "0" + x.getHours()
        }else{
            h = x.getHours()
        }
        y = h + ":" + m + ":" + s
        return y;
    },
    getDateN: function() {
        x = new Date()
        month = x.getMonth() + 1
        if (month <= 9) {
            month = "0" + month
        }
        if (x.getSeconds() <= 9) {
            s = "0" + x.getSeconds()
        }else{
            s = x.getSeconds()
        }
        if (x.getMinutes() <= 9) {
            m = "0" + x.getMinutes()
        }else{
            m = x.getMinutes()
        }
        if (x.getHours() <= 9) {
            h = "0" + x.getHours()
        }else{
            h = x.getHours()
        }
        y = x.getDate() + "." + month + "." + x.getFullYear()
        return y;
    },
    getDate: function() {
        x = new Date()
        month = this.months[x.getMonth()]
        if (x.getSeconds() <= 9) {
            s = "0" + x.getSeconds()
        }else{
            s = x.getSeconds()
        }
        if (x.getMinutes() <= 9) {
            m = "0" + x.getMinutes()
        }else{
            m = x.getMinutes()
        }
        if (x.getHours() <= 9) {
            h = "0" + x.getHours()
        }else{
            h = x.getHours()
        }
        y = x.getDate() + " " + month + " " + x.getFullYear()
        return y;
    }
}
Table = {
    open: function(border, rules, align) {
        Write("<table border='"+ border +"' rules='"+ rules +"' align='"+ align +"'>")
    },
    close: function() {
        Write("</table>")
    },
    rowOpen: function() {
        Write("<tr>")
    },
    rowClose: function() {
        Write("</tr>")
    },
    column: function(content) {
        Write("<td>")
        Write(content)
        Write("</td>")
    }
}
function Button(id, text, click) {
    document.write("<input type='button' id='"+id+"' value='"+text+"' onClick='"+click+"'>")
}
/*

    CODE

*/