export interface Message {
  id: string;        // 메시지의 고유 식별자
  sender: string;    // 메시지 발신자의 식별자 (예: 사용자 이름 또는 ID)
  content: string;   // 메시지 내용
  timestamp: Date;   // 메시지가 생성된 시간
}