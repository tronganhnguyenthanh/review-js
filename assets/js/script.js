let todos = []
document.querySelector(".btn.btn-info").addEventListener("click", function(){
  let todoValue = document.querySelector(".form-control").value
  if(todoValue === ""){
   document.querySelector("#errMsg").innerHTML = '<p class="text-center text-danger">Please enter your to do value</p>'
  }else{
    todos.push(todoValue)
    getTodoList(todos)
    document.querySelector(".form-control").value = ""
    document.querySelector("#errMsg").innerHTML = ""
  }
})

function getTodoList(todos){
  let list = '<div class="row m-2">'
   todos?.forEach(function(item, index){
    list += `<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center p-2">
      <p class="text-info m-2 p-2 text-nowrap">${item}</p>
      <button type="button" class="btn btn-danger m-2" onclick="deleteTodo(${index})">Delete</button>
    </div>
   `
   })
  list += '</div>'
  document.querySelector("#todoPage").innerHTML = list
}

function deleteTodo(index){
  let isDeleted = window.confirm("Are you sure to delete this to do list?")
  if(isDeleted){
   todos.splice(index, 1)
   getTodoList(todos)
   showTodoLength()
  }
}

function showTodoLength(){
 let todoLength = todos.length
 if(todoLength === 0){
  document.querySelector("#todoLength").innerHTML = "<h2 class='text-center text-danger'>No data available</h2>"
 }
}