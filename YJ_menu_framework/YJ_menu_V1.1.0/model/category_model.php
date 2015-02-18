<?php

/**
 * category_model short summary.
 *
 * category_model description.
 *
 * @version 1.0
 * @author 종일
 */

class Category_model extends CI_Model
{
    function __construct()
    {
        parent::__construct();
    }
    
    function getList() //$parent_idx)
    {
        $this->db->select('idx, parent_idx, display_idx, category_name');
        //if(!is_null($parent_idx))
        //    $this->db->where('parent_idx', $parent_idx);
        $this->db->where('use_yn', 'Y');
        $this->db->order_by('parent_idx','asc');
        $this->db->order_by('idx','asc');
        $query = $this->db->get('tbl_board_category');
        return $query->result();
    }
    
    function getSubList($parent_idx)
    {
        $this->db->select('idx, parent_idx, display_idx, category_name');
        //if(!is_null($parent_idx))
        //    $this->db->where('parent_idx', $parent_idx);
        $this->db->where('use_yn', 'Y');
        $this->db->where('parent_idx', $parent_idx);
        $this->db->order_by('parent_idx','asc');
        $this->db->order_by('idx','asc');
        $query = $this->db->get('tbl_board_category');
        return $query->result();
    }
    
    function getAllCategoryList()
    {
        $res_category = array();
        $tmp_category = $this->getList();
        
        foreach($tmp_category as $category)
        {
            if($category->parent_idx == '0')
            {
                $res_category[] = $category;
            }else
            {
                foreach($res_category as $res)
                {
                    if($res->idx == $category->parent_idx)
                        $res->sub_category[] = $category;
                }
            }
        }
        return $res_category;
    }
    
    /* Double Tile Menu Test
    function getLineCatgory($category)
    {
        $tag = '';
        $tag = $tag.'<div class="col1">';
        $tag = $tag.'<ul>';
        $tag = $tag.'<li class="title"><h5>'.$category->category_name.'</h5></li>';
        
        if(count($category->sub_category) <= 10)
        {
            foreach($category->sub_category as $s_cate)
            {
                $tag = $tag.'<li><a href="/category/'.$s_cate->idx.'">'.$s_cate->category_name.'</a></li>';
            }
            //$tag = $tag.'</ul></div></div></div>';
        }else
        {
            
            for($i=0;$i<10;$i++)
            {
                $tag = $tag.'<li><a href="/category/'.$category->sub_category[$i]->idx.'">'.$category->sub_category[$i]->category_name.'</a></li>';
            }
            $tag = $tag.'</ul></div>';
            $tag = $tag.'<div class="col2">';
            $tag = $tag.'<ul>';
            $tag = $tag.'<li class="title"><h5>'.$category->category_name.'</h5></li>';
            for($i=10;$i<count($category->sub_category);$i++)
            {
                $tag = $tag.'<li><a href="/category/'.$category->sub_category[$i]->idx.'">'.$category->sub_category[$i]->category_name.'</a></li>';
            }
            
            
            //$tag = $tag = $tag.'</ul></div></div></div>';
        }
        $tag = $tag.'</ul></div>';
        return $tag;
    }
    */
    
    function getCategoryTag()
    {

        //sub-category configuration by YJ
        $sub_category_max = 9;
        
        $highlight_point = 0;
        $hightlight = "";

        $categories = $this->getAllCategoryList();
        $tag = '';
        
        foreach($categories as $cate)
        {
            //sub-category configuration by YJ
            $sub_category_id = 0;

            $tag = $tag.'<li class="nav_tight_fixed nav_large_menu nav_medium_menu nav_medium nav_large">';
            $tag = $tag.'<a class="tight" href="/bada/main/category/'.$cate->idx.'">'.$cate->category_name.'</a>';
            $sub_tag = '';

            $sub_tag = $sub_tag."<div class='megamenu full-width' style='margin-top:1px;'>";

        // style="background-color:#02b8fa"

            /* double tile menu test  */
            //foreach($categories as $cate)
            //    $sub_tag = $sub_tag.$this->getLineCatgory($cate);
            //$sub_tag = $sub_tag.'</ul>';

            //sub menu 
            foreach($categories as $cate)
            {   
                 //sub-category configuration by YJ
                $counter_column = 0;
                

                $sub_tag = $sub_tag.'<div class="col1007">';    //style="background-color:#02b8fa" 
                $sub_tag = $sub_tag.'<ul>';

                if( $sub_category_id == $highlight_point )
                {
                    $highlight = "highlight";
                }
                else
                {
                    $highlight ="";
                }

                $sub_tag = $sub_tag.'<li class="title"><h5 class="'.$highlight.'">'.$cate->category_name.'</h5></li>';
                
                foreach($cate->sub_category as $s_cate)
                {
                    //sub category division by YJ
                    if($counter_column >= $sub_category_max)
                    {
                        $counter_column = 0;
                        $sub_tag = $sub_tag.'</ul>';
                        $sub_tag = $sub_tag.'</div>';
                        $sub_tag = $sub_tag.'<div class="col1007">';
                        $sub_tag = $sub_tag.'<ul>';
                        $sub_tag = $sub_tag.'<li class="title"><h5 class="'.$highlight.'">-</h5></li>';
                    }
                    $sub_tag = $sub_tag.'<li><a class="'.$highlight.'" href="/bada/main/category/'.$s_cate->idx.'">'.$s_cate->category_name.'</a></li>';
                    $counter_column++;
                }
                $sub_tag = $sub_tag.'</ul>';
                $sub_tag = $sub_tag.'</div>';

                $sub_category_id ++;

            }
            
            $sub_tag = $sub_tag.'</div>';          
            $tag = $tag.$sub_tag;
            $tag = $tag.'</li>';

            //YJ
            $highlight_point++;

        }
        
        return $tag;
    }
    

}
