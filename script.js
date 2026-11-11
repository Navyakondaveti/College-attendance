function markAttendance() {
    let name = document.getElementById("studentName").value;
    let status = document.getElementById("status").value;

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    document.getElementById("result").innerHTML =
        "Attendance marked for " + name + " : " + status;
}
