import { ChangeDetectionStrategy, Component, resource } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'app-comments',
  imports: [LoadingComponent],
  template: `
    <section>
      @if (comments.isLoading()) {
        <app-loading />
      } @else {
        <div class="mx-10 my-4 h-auto">
          <table class="table w-full mb-10">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>Post Id</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody>
              @for (comment of comments.value(); track comment.id) {
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <td>{{ comment.postId }}</td>
                  <td>{{ comment.name }}</td>
                  <td>{{ comment.email }}</td>
                  <td>{{ comment.body }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      }
    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent {
  public comments = resource<Comment[], { parameters: string }>({
    loader: async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments`
      );
      if (!response.ok) throw new Error('somenthing went wrong!');
      return await response.json();
    },
  });
}
