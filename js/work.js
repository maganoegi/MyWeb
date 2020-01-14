


// Source: http://yonaba.github.io/2012/08/14/List-your-GitHub-projects-using-JavaScript-and-jQuery.md.html


jQuery.githubUser = function(username, callback) {
    jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}
  
jQuery.fn.loadRepositories = function(username) {
    
    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data;


        var list = "<div class=\"gitGrid\">";
        $(repos).each(function() {
            let lang = this.language;
            let link = this.homepage?this.homepage:this.html_url;
            let imgSrc;
            if(lang == "CSS" || lang == "JavaScript" || lang == "HTML" || lang == "html") {
                imgSrc = "./resources/img/webpack.png";
            } else {
                imgSrc = "./resources/img/" + lang + ".png"; 
            }
            
            list += '<div class="gitwrapper" onclick="window.location=\''+ link + '\';\">' + '<img src="' + imgSrc + '" alt="langbased" class="gitImg"><div class="gitDesc">' + this.description + '</div>' + '</div>';
        }); 
        list += '</div>';
        target.empty().append(list);
    });
};

 

