// Copyright (c) 2024, Sana'a university and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Initial Research Defense", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on("Initial Research Defense", {
   
   
    // Fetch data from the Doctype
    student: function(frm) {
      

      var student = frm.doc.student
          frappe.call({
              method: "frappe.client.get_list",
              args: {
                doctype: "Program Enrollment",
                fields: ["name"],
                filters: {
                  student:student,
                  status:"Continued"
                }
              },
              callback: function(p) {
          frm.set_value('program_enrollment', p.message[0].name);
                
        
              }
            });
            frappe.call({
              method: "frappe.client.get_list",
              args: {
                doctype: "Student Supervisor",
                fields: ["supervisor_name"],
                filters: {
                  student:student,
                  status:"Active",
                  type:"Main Supervisor"
                }
              },
              callback: function(s) {
          frm.set_value('supervisor', s.message[0].supervisor_name);
                
        
              },
            });
            frappe.call({
              method: "frappe.client.get_list",
              args: {
                doctype: "Student Research",
                fields: ["research_title_arabic","research_title_english"],
                filters: {
                  student:student,
                  status:"Active"
                }
              },
              callback: function(s) {
                frm.set_value('research_title_english', s.message[0].research_title_english);
                frm.set_value('research_title_arabic', s.message[0].research_title_arabic);
        
              }
            });
        
    




      
    }
   
   });
