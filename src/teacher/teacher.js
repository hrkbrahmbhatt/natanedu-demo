var NatanLectureABI = [
    {
        "constant": true,
        "inputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "name": "owners",
        "outputs": [
        {
            "name": "",
            "type": "bool"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "_topic",
            "type": "string"
        }
        ],
        "name": "getByTopic",
        "outputs": [
        {
            "name": "",
            "type": "address[]"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "_teacherAdd",
            "type": "address"
        }
        ],
        "name": "whiteListTeacher",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "_add",
            "type": "address"
        },
        {
            "name": "_name",
            "type": "string"
        },
        {
            "name": "_lastName",
            "type": "string"
        }
        ],
        "name": "registerStudent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "_add",
            "type": "address"
        },
        {
            "name": "_name",
            "type": "string"
        },
        {
            "name": "_lastName",
            "type": "string"
        },
        {
            "name": "_region",
            "type": "string"
        },
        {
            "name": "_topic",
            "type": "string"
        }
        ],
        "name": "registerTeacher",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "name": "teachersAddress",
        "outputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "_teacherAdd",
            "type": "address"
        }
        ],
        "name": "blackListTeacher",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "_studentAdd",
            "type": "address"
        }
        ],
        "name": "blackListStudent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "name": "listedTeachers",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "name": "listedStudents",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "name": "students",
        "outputs": [
        {
            "name": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "type": "string"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "name": "teacherBalance",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "lecturesId",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "_studentAdd",
            "type": "address"
        }
        ],
        "name": "whiteListStudent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
        {
            "name": "",
            "type": "address"
        }
        ],
        "name": "teachers",
        "outputs": [
        {
            "name": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "type": "string"
        },
        {
            "name": "region",
            "type": "string"
        },
        {
            "name": "topic",
            "type": "string"
        }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "teacher",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "student",
            "type": "address"
        },
        {
            "indexed": false,
            "name": "lectureId",
            "type": "uint256"
        }
        ],
        "name": "lecturePaid",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "teacher",
            "type": "address"
        }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "teacher",
            "type": "address"
        }
        ],
        "name": "TeacherWhitelisted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "teacher",
            "type": "address"
        }
        ],
        "name": "TeacherBlacklisted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "teacher",
            "type": "address"
        }
        ],
        "name": "RegisteredTeacher",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "student",
            "type": "address"
        }
        ],
        "name": "StudentRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "student",
            "type": "address"
        }
        ],
        "name": "StudentWhitelisted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "student",
            "type": "address"
        }
        ],
        "name": "StudentBlacklisted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "previousOwner",
            "type": "address"
        }
        ],
        "name": "OwnershipRenounced",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
        {
            "indexed": true,
            "name": "previousOwner",
            "type": "address"
        },
        {
            "indexed": true,
            "name": "newOwner",
            "type": "address"
        }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "generateLectureId",
        "outputs": [
        {
            "name": "",
            "type": "uint256"
        }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "_lectureId",
            "type": "uint256"
        },
        {
            "name": "_lecturePrice",
            "type": "uint256"
        },
        {
            "name": "_teacher",
            "type": "address"
        }
        ],
        "name": "payLecture",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
        {
            "name": "_amount",
            "type": "uint256"
        }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

var lectureContract = web3.eth.contract(NatanLectureABI);
var contractAddress = '0xd658b2de84f32ebea598ba6505640edf4455c8af';
var lectureInstance = lectureContract.at(contractAddress);

var registerTeacher = function() {
    var account;
    //input from teacher-user
    var fName = document.getElementById('teacher_first_name').value;
    var lName = document.getElementById('teacher_last_name').value;
    var topic = document.getElementById('teacher_topic').value;
    var country = document.getElementById('teacher_country').value;


    web3.eth.getAccounts(function(err, res) {
        if(res[0] != undefined) {
            account = res[0];
            console.log(account);

            lectureInstance.listedTeachers(account, function(err, res) {
              if(err != null) {
                swal ( "Oops" ,  "Something went wrong!" ,  "error" );
              }
              else {
                if(res != 0){
                  swal ( "Oops" ,  "User already exist" ,  "error" );
                
                }
                else {
                  lectureInstance.registerTeacher(account, fName, lName, country, topic, function(err, res) {
                    if(err != null) {
                        console.log(err);
                    }
                    else {
                      lectureInstance.listedTeachers(account, function(err, res) {
                        if(err != null) {
                            console.log(err);
                        }
                        else {
                            console.log(res);
                        }
                      });
                    }
                });
                }
              }
            });
        }
    });
}

var loginTeacher = function() {
  var account;
  web3.eth.getAccounts(function(err, res) {
    if(res[0] != undefined) {
      account = res[0];
      console.log(account);

      lectureInstance.listedTeachers(account, function(err, res) {
        if(err != null) {
          swal ( "Oops" ,  "Something went wrong!" ,  "error" );
        }
        else {
          if(res == 0){
            swal ( "Oops" ,  "teacher not found!" ,  "error" );
          }
          else if (res == 1) {
            swal ( "Oops" ,  "Blacklisted teacher!" ,  "error" );
          }
          else if ((res == 2) || (res == 3)) {
            swal("Congrats!", "you're logged in", "success");
            //redirect to teacher dashboard

            window.location.href="/teacher/dashboard";
          }
        }
      })      
    }
  });
}
