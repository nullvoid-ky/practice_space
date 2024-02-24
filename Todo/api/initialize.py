class Todo:
    def __init__(self) -> None:
        self.todo_list = []
        self.id = 10000

    def __str__(self) -> str:
        return self.todo_list

    def add_todo(self, act_type, act_title):
        self.id += 1
        object = TodoObject(self.id, act_type, act_title)
        self.todo_list += [object]
        return {
           {"itemAdded" :  {
                    {"id" : self.id},
                    {"act_type" : act_type},
                    {"act_title" : act_title}
                }
            }
        }
    
    def delete_todo_by_id(self, id):
        act_type = ""
        act_title = ""
        for todo in self.todo_list:
            if todo.id == id:
                act_type = todo.act_type
                act_title = todo.act_title
                self.todo_list.remove(todo)
                return {"itemRemoved" :  {
                            {"id" : id},
                            {"act_type" : act_type},
                            {"act_title" : act_title}
                        }
                }
                
        return {"error" :  "itemNotFound"}
        
class TodoObject:

    def __init__(self, id, act_type, act_title) -> None:
        self.id = id
        self.act_type = act_type
        self.act_title = act_title

    def __str__(self) -> str:
        return {
            {"id" : self.id},
            {"act_type" : self.act_type},
            {"act_title" : self.act_title}
        }
