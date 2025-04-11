import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { IMiseEnGestion } from '../mise-en-gestion.model';
import { MiseEnGestionService } from '../service/mise-en-gestion.service';

@Component({
  templateUrl: './mise-en-gestion-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class MiseEnGestionDeleteDialogComponent {
  miseEnGestion?: IMiseEnGestion;

  protected miseEnGestionService = inject(MiseEnGestionService);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: string): void {
    this.miseEnGestionService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
