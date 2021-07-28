function pop() {
        var table = document.getElementById("myTable");



        for(let i = 0; i <20; i++){
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            if(i % 4 === 0){
            cell1.innerHTML = "A cool game";
            cell2.innerHTML = "Xbox";
            cell3.innerHTML = "80";
            cell4.innerHTML = "90";
            cell5.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
            }

            if(i % 4 === 1){
                cell1.innerHTML = "Dummy game";
                cell2.innerHTML = "Playstation";
                cell3.innerHTML = "60";
                cell4.innerHTML = "40";
                cell5.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
            }

            if(i % 4 === 2){
                cell1.innerHTML = "Faux data";
                cell2.innerHTML = "Switch";
                cell3.innerHTML = "99";
                cell4.innerHTML = "100";
                cell5.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
            }

            if(i % 4 === 3){
                cell1.innerHTML = "More dummy data";
                cell2.innerHTML = "Computer";
                cell3.innerHTML = "20";
                cell4.innerHTML = "20";
                cell5.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing eli sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
                }

        }

}

function submit(){
    document.getElementById("leave-review").innerHTML = "Thank you"
}

pop();

