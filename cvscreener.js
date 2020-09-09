console.log("This is a CV Screener JS file");
const data = [
    {
        name: "John",
        age: 25,
        photo: "https://randomuser.me/api/portraits/men/75.jpg",
        city: "Dhaka",
        nationality: "Bengali",
        language: "JavaScript",
        hobbies: "programming",
        Phone: '01*********',
        roll: 'Web Developer'
    },
    {
        name: "Paton",
        age: 35,
        photo: "https://randomuser.me/api/portraits/men/65.jpg",
        city: "Kolkata",
        nationality: "Indian",
        language: "Python",
        hobbies: "Building software",
        Phone: '01*********',
        roll: 'Software Engineer'
    },
    {
        name: "VGF",
        age: 75,
        photo: "https://randomuser.me/api/portraits/men/95.jpg",
        city: "Khulna",
        nationality: "Bengali",
        language: "Golang",
        hobbies: "Learning about Technology",
        Phone: '01*********',
        roll: 'Programmer'
    },
    {
        name: "SkillF",
        age: 45,
        photo: "https://randomuser.me/api/portraits/men/55.jpg",
        city: "Dhaka",
        nationality: "Bengali",
        language: "HTML",
        hobbies: "programming",
        Phone: '01*********',
        roll: 'Programmer'
    },
]


function cvIterator(value) {
    let nextIndex = 0;
    return {
        next: function() {
            if (nextIndex < value.length) {
                return {
                    value: value[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
let candidate = cvIterator(data);
nextCV();
let next = document.getElementById('next');
next.addEventListener('click', nextCV);
function nextCV() {
    let nextCandidate = candidate.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (nextCandidate != undefined) {
        image.innerHTML = `<img src=${nextCandidate.photo}>`
        profile.innerHTML= `<div class="list-group">
        <a href="#" class="list-group-item list-group-item-action active">
          ${nextCandidate.name}
        </a>
        <a href="#" class="list-group-item list-group-item-action">${nextCandidate.age} years old</a>
        <a href="#" class="list-group-item list-group-item-action">Lives in ${nextCandidate.city}</a>
        <a href="#" class="list-group-item list-group-item-action">Nationality is ${nextCandidate.nationality}</a>
        <a href="#" class="list-group-item list-group-item-action">Known ${nextCandidate.language}</a>
        <a href="#" class="list-group-item list-group-item-action">Assigned in ${nextCandidate.roll}</a>
        <a href="#" class="list-group-item list-group-item-action">phone no. ${nextCandidate.Phone}</a>
      </div>`
    }
    else{
        alert('Candidates has been ended');
        location.reload();
    }
}
