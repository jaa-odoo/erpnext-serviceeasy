frappe.ui.form.on('Item', {
	category: function(frm) {
		frm.set_query("sub_category", function(doc) {
			return {
				filters: [
					['category', 'in', cur_frm.doc.category]
				]
			};
		});
	},
});
