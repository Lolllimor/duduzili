import { Mention, MentionsInput } from 'react-mentions';
import style from './chat.module.css';
// import { builder } from '@/src/api/builder';
import { errorMessageHandler } from '@/lib/error-handler';

export default function ChatInput(props: {
  setValue: (val: string) => void;
  value: string;
  placeholder?: string;
}) {
  const fetchTags = () => {};
  const fetchUsers = () => {};
  //   function fetchTags(search = "", callback: any) {
  //     builder
  //       .use()
  //       .posts.tags({ search })
  //       .then(({ data }) => {
  //         const result = data?.data?.results?.map(
  //           (user: { id: number; name: string }) => ({
  //             display: user.name.includes("#") ? user.name : #${user.name},
  //             id: user.name,
  //           })
  //         );
  //         return result;
  //       })
  //       .then(callback)
  //       .catch((error) => {
  //         errorMessageHandler(error);
  //       });
  //   }
  //   function fetchUsers(search = "", callback: any) {
  //     builder
  //       .use()
  //       .user_activities.fetch_users({ search })
  //       .then(({ data }) => {
  //         const result = data?.data?.results?.map((item, idx) => ({
  //           display: @${item.username},
  //           id: item.username,
  //         }));
  //         return result;
  //       })
  //       .then(callback)
  //       .catch((error) => {
  //         errorMessageHandler(error);
  //       });
  //   }


  return (
    <MentionsInput
      value={props.value}
      onChange={(e: any) => props.setValue(e.target.value)}
      classNames={style}
      placeholder={props?.placeholder ?? 'Enter message'}
      // onKeyDown={handleKeyDown}
    >
      <Mention
        trigger="@"
        data={fetchUsers}
        markup="{{_display_}}"
        className={style.mentions__mention}
        renderSuggestion={(suggestion: any) => suggestion?.id}
        // onAdd={(id, display) => props.setMentions(id as string)}
      />

      <Mention
        trigger="#"
        markup="{{_display_}}"
        data={fetchTags}
        className={style.mentions__mention}
        renderSuggestion={(suggestion: any) => suggestion?.id}
        // onAdd={(id, display) => props.setTags(id as string)}
      />
    </MentionsInput>
  );
}
