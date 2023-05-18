<template>
  <div>
    <button @click="downloadExcel">Excel 다운로드 임시데이터</button>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';

export default {
  methods: {
    downloadExcel() {
      // 엑셀 파일에 들어갈 데이터 생성
      const data = [
        ['이름', '나이', '성별'],
        ['홍길동', 30, '남성'],
        ['김영희', 25, '여성'],
        ['John Doe', 35, 'Male'],
      ];

      // 엑셀 워크북 생성
      const workbook = XLSX.utils.book_new();
      const sheet = XLSX.utils.aoa_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, sheet, 'Sheet1');

      // 엑셀 파일 다운로드
      const excelBuffer = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' });
      this.saveExcelFile(excelBuffer, 'example.xlsx');
    },
    saveExcelFile(buffer, fileName) {
      const blob = new Blob([buffer], { type: 'application/octet-stream' });

      if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // IE에서 파일 다운로드
        window.navigator.msSaveBlob(blob, fileName);
      } else {
        // 다른 브라우저에서 파일 다운로드
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
  },
};
</script>
