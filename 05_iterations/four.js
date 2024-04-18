const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}


for (const key in myObj) {
  console.log(key)
}


for (const key in myObj) {
  console.log(myObj[key])
}

const programming=["js","rb","py","java","c++"]

for (const key in programming) {
  console.log(programming[key])
}

// maps cannot be iterated using for in

