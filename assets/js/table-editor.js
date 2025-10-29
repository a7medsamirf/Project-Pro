// Table Cell Editing Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Find all edit buttons
    const editButtons = document.querySelectorAll('.ki-duotone.ki-notepad-edit');
    
    editButtons.forEach(button => {
        const btnElement = button.closest('a');
        btnElement.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the parent cell (td)
            const cell = this.closest('td');
            if (!cell) return;
            
            // Find the parent row
            const row = cell.closest('tr');
            if (!row) return;
            
            // Store original content of the cell
            const originalContent = cell.innerHTML;
            
            // Find all editable cells in this row (excluding the action cell)
            const editableCells = row.querySelectorAll('td.editable');
            
            // Create action buttons container
            const actionButtons = document.createElement('div');
            actionButtons.className = 'd-flex';
            
            // Create cancel button
            const cancelButton = document.createElement('a');
            cancelButton.className = 'btn btn-icon btn-bg-light bg-icon btn-sm me-1 cancel-btn';
            cancelButton.innerHTML = '<i class="isax isax-close-circle5 text-danger fs-2"></i>';

            // Create save button
            const saveButton = document.createElement('a');
            saveButton.className = 'btn btn-icon btn-bg-light bg-icon btn-sm me-1 save-btn';
            saveButton.innerHTML = '<i class="isax isax-tick-circle5 text-success fs-2"></i>';
            
            // Add buttons to container
            actionButtons.appendChild(cancelButton);
            actionButtons.appendChild(saveButton);

            // Replace the cell content with action buttons
            cell.innerHTML = '';
            cell.appendChild(actionButtons);
            
            // Convert editable cells to input fields
            editableCells.forEach(editableCell => {
                const textElement = editableCell.querySelector('.text-custom-dark');
                if (!textElement) return;
                
                const currentText = textElement.textContent.trim();
                editableCell.dataset.originalContent = editableCell.innerHTML;
                
                // Create input element
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'form-control form-control-sm w-50';
                input.value = currentText;
                
                // Clear the cell and add the input
                editableCell.innerHTML = '';
                editableCell.appendChild(input);
            });
            
            // Save button click handler
            saveButton.addEventListener('click', function() {
                // Update all editable cells with new values
                editableCells.forEach(editableCell => {
                    const input = editableCell.querySelector('input');
                    if (!input) return;
                    
                    const newValue = input.value;
                    
                    // Create a new span with the updated value
                    const textSpan = document.createElement('span');
                    textSpan.className = 'text-custom-dark d-block fs-6';
                    textSpan.textContent = newValue;
                    
                    // Clear the cell and add the new content
                    editableCell.innerHTML = '';
                    editableCell.appendChild(textSpan);
                });
                
                // Restore original action buttons
                cell.innerHTML = originalContent;
                
                // Reattach event listener to the edit button
                const newEditButton = cell.querySelector('.ki-duotone.ki-notepad-edit').closest('a');
                newEditButton.addEventListener('click', btnElement.onclick);
            });
            
            // Cancel button click handler
            cancelButton.addEventListener('click', function() {
                // Restore original content for all editable cells
                editableCells.forEach(editableCell => {
                    if (editableCell.dataset.originalContent) {
                        editableCell.innerHTML = editableCell.dataset.originalContent;
                    }
                });
                
                // Restore original action buttons
                cell.innerHTML = originalContent;
                
                // Reattach event listener to the edit button
                const newEditButton = cell.querySelector('.ki-duotone.ki-notepad-edit').closest('a');
                newEditButton.addEventListener('click', btnElement.onclick);
            });
        });
    });
});