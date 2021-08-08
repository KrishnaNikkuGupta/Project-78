var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F586664288934084285%2F&psig=AOvVaw1ofTYYwYGFBwyI4Js55LtR&ust=1610799187362000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDatuP0ne4CFQAAAAAdAAAAABAD.JPG", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["FAMILY BOOK","Ritti Gupta", "Sanjeev Gupta", "Sara Gupta", "Avin Gupta", "Herbans Lal", "Krishna Nikku Gupta"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6;
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
