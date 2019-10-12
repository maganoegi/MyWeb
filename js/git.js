jQuery.githubUser = function(username, callback) {
    jQuery.getJSON('https://api.github.com/users/'+username+'/repos?callback=?',callback)
}
  
jQuery.fn.loadRepositories = function(username) {
    this.html("<span>Querying GitHub for " + username +"'s repositories...</span>");
    
    var target = this;
    $.githubUser(username, function(data) {
        var repos = data.data;

        console.log(data);
    
        var list = "<div class=\"gitGrid\">";
        $(repos).each(function() {
            let lang = this.language;
            let link = this.homepage?this.homepage:this.html_url;
            let imgSrc;
            if(lang in ["CSS", "Javascript", "HTML", "html"]) {
                imgSrc = "./resources/img/webpack.png";
            } else {
                imgSrc = "./resources/img/" + lang + ".png"; 
            }
            
            list += '<div class="gitwrapper" onclick="window.location=\''+ link + '\';\">' + '<img src="' + imgSrc + '" alt="langbased" class="gitImg"><div class="gitDesc">' + this.description + '</div>' + '</div>';
        }); 
        list += '</div>';
        target.empty().append(list);


    });

    // UNCOMMENT FOR TESTING PURPOSES!! Limited amount of queries GitHub

    // var link = "www.placeholder.com";
    // var desc = "Traveling Salesman Problem using Genetical Algorithm";
    // var list = "<div class=\"gitGrid\">";
    // for(i=0; i<20;i++) {
    //     let lang = "Java";
    //     let imgSrc; 
    //     switch(lang) {
    //         case "Python":
    //             imgSrc = "./resources/python.png";
    //             break;
    //         case "C":
    //             imgSrc = "./resources/c.png";
    //             break;
    //         case "Rust":
    //             imgSrc = "./resources/rust.png";
    //             break;
    //         case "Java":
    //             imgSrc = "./resources/java.png";
    //             break;
    //     }
    //     list += '<div class="gitwrapper" href="'+ link + '">' + '<img src="' + imgSrc + '" alt="langbased" class="gitImg">' + '<div class="gitDesc">' + desc + '</div>' + '</div>';
    // }
    // list += '</div>';
    // target.empty().append(list);

};

 

