onload = doit;
function doit() {
        document.getElementById("submit").onclick = doit2;
}
function doit2() {
        let userId = document.getElementById("userId").value;
        const userUrl = `http://jsonplaceholder.typicode.com/users/${userId}`;
        let userInfo;

        fetch(userUrl).then(Response => Response.json()).then(user => userInfo = user)
                .then(userInfo => {
                        document.getElementById("lblName").innerHTML = `name: ${userInfo.name}`;
                        document.getElementById("lblEmail").innerHTML = `Email: ${userInfo.email}`;
                        document.getElementById("divAddress").innerHTML
                                = `<ul><label>Address:</label>
                                       <li> street: ${userInfo.address.street}</li>
                                       <li>suite: ${userInfo.address.suite}</li>
                                       <li>city: ${userInfo.address.city}</li>
                                       <li>zipcode: ${userInfo.address.zipcode}</li>
                                       <li>lat: ${userInfo.address.geo.lat}</li>
                                       <li>lng: ${userInfo.address.geo.lng}</li>
                                       </ul>`;
                        const url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=PQdF0FuG2miKKYgrN4ZGQGd6BBt8bGZY&location=${userInfo.address.geo.lat},${userInfo.address.geo.lng}&includeRoadMetadata=true&includeNearestIntersection=true`
                        fetch(url).then(Response => Response.json()).then("console.log");
                        // console.log(url);
                        const postsUrl = `http://jsonplaceholder.typicode.com/posts?userId=1`;
                        fetch(postsUrl).then(Response => Response.json())
                                .then(allPosts => {
                                        let userPosts = allPosts.filter(post => post.userId = userId);
                                        document.getElementById("userPosts").innerHTML
                                                = `${userPosts.length} posts for this user<br>`;
                                        userPosts.forEach((item, index) => {
                                                document.getElementById("userPosts").innerHTML
                                                        += `<h3>${item.title}</h3>
                                                body: <p id=par${index}> ${item.body}</p>
                                                <button class="comments" id="${index}">Show Comments</button>
                                                <div id="Awaab"></div><br>`;
                                                let s = document.getElementsByClassName("comments");
                                                for (let i = 0; i < s.length; i++) {
                                                        s[i].onclick = doit3;
                                                }
                                        });

                                });
                });

}
function doit3(event) {
        let id = parseInt(this.id + 1);
        let url = `http://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url).then(respo => respo.json())
                .then(comma => {
                        let comments = ``;
                        comma.forEach((item) => {
                                let temp = `name: ${item.name}<br>
                                email:  ${item.email}<br>
                                body: ${item.body}<br>`;
                                comments += `${temp}<br>`
                        });
                        this.innerHTML = comments;
                });
        // console.log(this.id);
        // console.log(id);
}