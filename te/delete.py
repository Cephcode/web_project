import wikipediaapi as wk
import customtkinter as ctk

root=ctk.CTk()
root.title("Wikipedia Search")
def search():
    wiki_language=wk.Wikipedia("fr")
    question=entry.get()
    data=wiki_language.page(question)
    response=ctk.CTkLabel(master=root,text=f' {data.title}:\n'+f'{ data.text[:1000]}')
    print(response)
    response.pack(pady=40)
    scrool=ctk.CTkScrollbar(master=root)
    scrool.pack()
    
root.geometry('400x400')
entry=ctk.CTkEntry(master=root,placeholder_text='que rechercher vous ?')
entry.pack(pady=30)
button=ctk.CTkButton(master=root,text='rechercher',command=search)
button.pack(pady=30)
root.mainloop()