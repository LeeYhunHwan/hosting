$(function () {
	var $container=$('.port_wrap'),
		$loadMoreBtn=$('.more'),
		$addItemCount=3,//클릭할때마다 n개씩 나오는 갯수
		$added=0,//더보기버튼 클릭 다나오면 사라지는 용도
		$allData=[];
		
		//$.getJSON('파일경로', function(i, data){});
		/* $.getJSON('./data/content.json', function(data){
			initGallery();
		}); */
		/* $container.masonry({
		  itemSelector: '.gallery-item',
		  columnWidth: 210,
		  gutter: 30
		}); */
		
		
		$.getJSON('./data/portfolio.json', initGallery);
		
		
		function initGallery(data){
			$allData=data;
			
			//console.log($allData);
			addItem();
			$loadMoreBtn.click(addItem);
		}
		
		function addItem(){
			var elements=[];
			var sliceData;
			
			sliceData=$allData.slice($added, $added + $addItemCount);
			
			$.each(sliceData, function(idx, item){
				var itemHTML=
				
                '<li class="portfolio_box">'+
                    '<a href="'+item.projectLink+'" target="_blank">'+
                        '<span class="frame_01"><span class="f_box"><img src="'+item.imgUrl+'" alt="'+item.alt+'"></span></span>'+
                        '<div class="text">'+
                            '<p class="title">'+item.title+'</p>'+
                            '<p class="subtitle">'+item.type+'</p>'+
                            '<p class="content">'+item.desc+'</p>'+
                        '</div>'+
                    '</a>'+
                '</li>';
					
				
				elements.push($(itemHTML).get(0));
				
			});
			
			$container.append(elements);
			$added +=sliceData.length;


			
			// var portfolioContainer=$('.port_wrap');
			// var mixer = mixitup(portfolioContainer, {
			// 	selectors: {
			// 		target: '.title'
			// 	},
			// 	animation: {
			// 		duration: 300
			// 	}
			// });
			// mixer.forceRefresh();
			
			
			 if($added<$allData.length){
				$loadMoreBtn.show();
			}else{
				$loadMoreBtn.hide();
			}
			
			/* $container.imagesLoaded( function() {
				$container.masonry( 'appended', elements );
			}); */
		}
});