const musicNameElements = document.querySelectorAll('.music_name_block.t_l.f_13.break');

if (musicNameElements.length > 0) {
    const musicNames = Array.from(musicNameElements)
                            .map(element => element.textContent.trim()) 
                            .join('\n'); 

    const blob = new Blob([musicNames], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'music_names.txt';
    
    link.click();
} else {
    console.error('指定された要素が見つかりませんでした');
}
